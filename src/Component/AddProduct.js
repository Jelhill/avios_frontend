import React from 'react'
import { updateProductState, updateProductInputState, updateProductImageState } from "../ReduxStateManagement/actions/productActions"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import AuthService from "../Services/authServices"
import axios from "axios"

function AddProduct(props) {

    // const { productId } = useParams()

    const getInputs = (e) => {
        e.preventDefault()
        props.updateProductInputState({[e.target.name]: e.target.value})
    }

    const getImage = (e) => {
        e.preventDefault()
        props.updateProductImageState({[e.target.name]: e.target.files})
    }
    
    const addProduct = async e => {
        e.preventDefault()

        // if(props.paymentProof === null) {
        //     props.showNotificationModal({show: true, message: "Please select an image"})  
        //     return          
        // }   

        // const image = props.varietyImages.display_image[0]
        const uploader = () => {
            return new Promise((resolve, reject) => {
                const data = new FormData()
                data.append("file", props.productDisplayImage.display_image[0])
                data.append("upload_preset", "jelhill")
                
                axios.post("https://api.cloudinary.com/v1_1/dvbaflmgm/image/upload", data)
                .then(response => {
                    console.log("Image Res", response)
                    let display_image = response.data.secure_url
                    const { product_name, product_description } = props.productInputs          
                    const data = { product_name, product_description, display_image }

                    AuthService.addProduct(data)
                    .then(response => {
                        if(response.status === "success") {
                            console.log("success")
                            // props.showNotificationModal({show: true, message: "success"})
                        }
                    }) 


                }) 
                .catch(error => {
                    console.log(error)
                })
            }) 
        }      
        
        uploader()
    }

    return (
        <form className="variety-form">
            <div className="form-group">
                <h1>Add a Product</h1>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" name="product_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Product Name" onChange={getInputs}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Product Description</label>
                <textarea name="product_description" className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={getInputs}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Example file input</label>
                <input type="file" name="display_image" className="form-control-file" id="exampleFormControlFile1" onChange={getImage}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={addProduct}>Submit</button>
        </form>
    )
}


const mapStateToProps = (state) => {  
    const { productReducer } = state 
    return {
        products: productReducer.products,
        productDisplayImage: productReducer.productDisplayImage,
        productInputs: productReducer.productInputs   
    }
}

const mapDispatchToProps = (dispatch) => {   
    return {
        updateProductState: (values) => dispatch(updateProductState(values)),
        updateProductInputState: (values) => dispatch(updateProductInputState(values)),
        updateProductImageState: (values) => dispatch(updateProductImageState(values)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddProduct))
