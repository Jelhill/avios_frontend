import React, {Component} from 'react';  
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Details from "./Component/Details"

import { Switch, Route, withRouter } from "react-router-dom"
import ProductSection from './Component/ProductSection';
import AddVarieyForm from './Component/AddVarieyForm';
import AddProduct from './Component/AddProduct';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <Switch>
            <Route exact path={"/"} component={Home} />    
            <Route exact path={"/addVarietyForm/:productId"} component={AddVarieyForm} />    
            <Route exact path={"/product/:product_id"} component={ProductSection} />    
            <Route exact path={"/productDetails/"} component={Details} />    
            <Route exact path={"/addProduct"} component={AddProduct} />    
        </Switch>
      </div>
    )
  }  
}


      


export default withRouter(App)