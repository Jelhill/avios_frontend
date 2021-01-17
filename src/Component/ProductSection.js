import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from "react-router-dom"
import { updateVarietyState } from "../ReduxStateManagement/actions/productActions"
import Navbar from "../Component/Navbar"
import NavbarBelow from "../Component/NavbarBelow"
import AuthServices from "../Services/authServices"

function ProductSection(props) {

    const { product_id } = useParams()
    const getVarietiesByProductId = () => {
        AuthServices.getVarietiesByProductId(product_id)
        .then(response => {
            console.log(response)
            if(response.status === "success"){
                props.updateVarietyState(response.data)
            }
        })
    }

    
    useEffect(() => {
        Promise.all([getVarietiesByProductId()])
        // eslint-disable-next-line 
    },[])


    return (
        <Fragment>
        <Navbar />
        <NavbarBelow /> 
        <div className="row">
          {props.productVarieties.length 
          ? props.productVarieties.map((item, index ) => (
            <div className="col-11 mx-auto">
                <div key="" className="category-card">
                    <Link to=''>
                        <img className="category-img" src="" alt="pics"/>
                        <div className="product-card">                                    
                            <button className="addToCart">
                                <span><i className="fas fa-cart-plus"></i></span></button>
                        </div>
                    </Link>
                </div>
            </div>                            
          ))
          : null
          }
        </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const {productReducer} = state

    return {
        products: productReducer.products,
        productVarieties: productReducer.productVarieties,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateVarietyState: (value) => dispatch(updateVarietyState(value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductSection)