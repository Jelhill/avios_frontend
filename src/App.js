import React, {Component} from 'react';  
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Details from "./Component/Details"

import { Switch, Route, withRouter } from "react-router-dom"
import ProductSection from './Component/ProductSection';
import AddVarieyForm from './Component/AddVarieyForm';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <Switch>
            <Route exact path={"/"} component={Home} />    
            <Route exact path={"/addVarietyForm/:productId"} component={AddVarieyForm} />    
            <Route exact path={"/product/:productId"} component={ProductSection} />    
            <Route exact path={"/productDetails/"} component={Details} />    
        </Switch>
      </div>
    )
  }  
}


      


export default withRouter(App)