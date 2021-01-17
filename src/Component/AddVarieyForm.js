import React from 'react'
import { updateProductState, updateVarietyInputState, updateVarietyImageState, updateStateWithTempImage } from "../ReduxStateManagement/actions/productActions"
import { withRouter, useParams } from "react-router-dom"
import { connect } from "react-redux"
import AuthService from "../Services/authServices"
import axios from "axios"

function AddVarieyForm(props) {

    const { productId } = useParams()

    const getInputs = (e) => {
        e.preventDefault()
        props.updateVarietyInputState({[e.target.name]: e.target.value})
    }

    const getImage = (e) => {
        e.preventDefault()
        props.updateVarietyImageState({[e.target.name]: e.target.files})
    }
    
    const uploadVariety = async e => {
        e.preventDefault()

        // if(props.paymentProof === null) {
        //     props.showNotificationModal({show: true, message: "Please select an image"})  
        //     return          
        // }   

        const images = Object.values(props.varietyImages.images)
        const uploader = () => {
            return new Promise((resolve, reject) => {
                const errors = []
                images.map(async file => {
                    const data = new FormData()
                    data.append("file", file)
                    data.append("upload_preset", "jelhill")
                    
                    return axios.post("https://api.cloudinary.com/v1_1/dvbaflmgm/image/upload", data)
                    .then(response => {
                        props.updateStateWithTempImage(response.data.secure_url)
                    }).catch(error => {
                        errors.push(error)
                        reject(error)
                    })
                })  
                resolve()
            }) 
        }      
        
        uploader()
        .then(() => {
            const { size, color, quantity, tempImage } = props            
            const data = { product_id: productId, size, color, quantity, images: tempImage }
    
            AuthService.uploadVarieties(data)
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
    }

    return (
        <form className="variety-form">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Variety Size</label>
                <input type="number" name="size" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter iten Size" onChange={getInputs}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Color</label>
                <input type="text" name="color" className="form-control" id="exampleInputPassword1" placeholder="Enter the Item Color" onChange={getInputs} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Quantity</label>
                <input type="text" name="quantity" className="form-control" id="exampleInputPassword1" placeholder="Number of Items" onChange={getInputs}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Example file input</label>
                <input type="file" name="images" className="form-control-file" id="exampleFormControlFile1" multiple onChange={getImage}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={uploadVariety}>Submit</button>
        </form>
    )
}


const mapStateToProps = (state) => {  
    const { productReducer } = state 
    console.log(">>>", productReducer.tempImage)
    return {
        products: productReducer.products,
        size: productReducer.varietyInputs.size,
        color: productReducer.varietyInputs.color,
        quantity: productReducer.varietyInputs.quantity,
        varietyImages: productReducer.varietyImages,
        tempImage: productReducer.tempImage
    }
}

const mapDispatchToProps = (dispatch) => {   
    return {
        updateProductState: (values) => dispatch(updateProductState(values)),
        updateVarietyInputState: (values) => dispatch(updateVarietyInputState(values)),
        updateVarietyImageState: (values) => dispatch(updateVarietyImageState(values)),
        updateStateWithTempImage: (values) => dispatch(updateStateWithTempImage(values)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddVarieyForm))
