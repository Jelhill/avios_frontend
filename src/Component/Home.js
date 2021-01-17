import React, { Component } from 'react'
import Navbar from './Navbar';
import NavbarBelow from './NavbarBelow';
import ProductCategories from './ProductCategories';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <NavbarBelow />    
                <ProductCategories />   
            </div>
        )
    }
}
