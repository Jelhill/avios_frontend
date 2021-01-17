import React, { useEffect } from 'react'
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import AuthServices from "../Services/authServices"
import { updateProductState } from "../ReduxStateManagement/actions/productActions"
function ProductCategories(props)  {   
    
    const getProducts = () => {
        AuthServices.getProducts()
        .then(response => {
            console.log(response)
            if(response.status === "success"){
                props.updateProductState(response.data)
            }
        })
    }

    useEffect(() => {
        Promise.all([getProducts()])
        // eslint-disable-next-line 
    },[])

    return (
        <div className="row">
            <div className="col-11 mx-auto">
            {!props.products.length ? null : props.products.map((product, index) => {
                return (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <div key={index} className="category-card">
                            <img className="category-img" src={product.display_image} alt="pics"/>
                            <h3 className="text-center">{product.product_name}</h3>
                            <Link to={`/product/${product.id}`} className="btn btn-danger view-product">View Product</Link>
                        </div>
                    </Link>
                )
            })}
                
            </div>                
        </div>
    )                                                                                              
}

const mapStateToProps = (state) => {  
    const { productReducer } = state 
    console.log(productReducer.products)
    return {
        products: productReducer.products
    }
}

const mapDispatchToProps = (dispatch) => {   
    return {
        updateProductState: (values) => dispatch(updateProductState(values))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCategories))

