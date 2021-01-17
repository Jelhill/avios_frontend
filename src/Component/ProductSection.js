import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useParams, Link } from "react-router-dom"
import Navbar from "../Component/Navbar"
import NavbarBelow from "../Component/NavbarBelow"

function ProductSection(props) {
    const {productId } = useParams()
    const filteredProduct = props.products.filter((product) => product.category.toLowerCase() === product.toLowerCase() )
    console.log(productId)
    return (
        <Fragment>
        <Navbar />
        <NavbarBelow /> 
        <div className="row">
            <div className="col-11 mx-auto">
                {filteredProduct.map((product, index) => {
                    return (                        
                        <div key={index} className="category-card">
                            <Link 
                                to={{
                                    pathname: "/productDetails/",
                                    state: {product: product}
                                    }}>
                                <img className="category-img" src={product.image} alt="pics"/>
                                <div className="product-card">                                    
                                    <button className="addToCart">
                                        <span><i className="fas fa-cart-plus"></i></span>{product.inCart ? "In Cart" : "Add to Cart"}</button>
                                </div>
                            </Link>
                        </div>
                    )
                })}                
            </div>                            
        </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const {productReducer} = state

    return {
        products: productReducer.products,
        // productCategories: productReducer.productCategories
    }
}



export default connect(mapStateToProps)(ProductSection)