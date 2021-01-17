import React from 'react'
import { Link } from "react-router-dom"

export default function Details(props) {
    const { image, title, company, price, information } = props.location.state.product
    return (        
        <div className="container py-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={image} className="img-fluid" alt="product"/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        made by: <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                        <strong>
                            Price: <span>₦</span>{price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        some info about product
                    </p>
                    <p className="text-muted lead">{information}</p>
                    <div>
                        <Link to={'/'}>
                            <button>
                                back to products
                            </button>
                        </Link>
                        <button>                                   
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
