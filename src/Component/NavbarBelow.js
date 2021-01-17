import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {NavbarBelowWrapper} from "../StyledComponents/FomStyles"
import { connect } from 'react-redux'

class NavbarBelow extends Component {
    render() {
        return (
            <NavbarBelowWrapper className="row">
                <div className="col-12 d-flex justify-content-between px-5 py-2">
                    <Link to={"/"} className="nav-link">Home</Link>
                    <Link to={"/addProduct"} className="nav-link">Add a Product</Link>
                    {/* {!this.props.navbarBelowCategory ? null : this.props.navbarBelowCategory.map((category, index) => {
                        return <Link key={index} to={`/productSection/${category.title}`} className="nav-link">{category.categoryName}</Link>
                    })} */}
                </div>            
            </NavbarBelowWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const {productReducer} = state
    return {
        products: productReducer.products,
        productCategories: productReducer.productCategories,
        navbarBelowCategory: productReducer.navbarBelowCategory
    }
}


export default connect(mapStateToProps)(NavbarBelow)