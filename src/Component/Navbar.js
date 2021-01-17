import React from 'react'
import {ButtonWrapper, NavWrapper} from "../StyledComponents/FomStyles"

export default function Navbar() {
    return (
        <NavWrapper>
            <div className="row">
                <div className="col-12 navbar navbar-expand-sm px-sm-5 py-4 f-flex justify-content-between">              
                    <span><i className="fas fa-search"></i></span>
                    <form action="" className="form-class">
                        <input className="searchArea " type="text"></input>
                        <button className="searchBtn"><span><i className="fas fa-search"></i></span></button>
                    </form>
                    
                    <ButtonWrapper>
                         <span><i className="fas fa-cart-plus mx-2"></i></span>
                         Cart
                    </ButtonWrapper>
                </div>
            </div>          
        </NavWrapper>
    )
}

