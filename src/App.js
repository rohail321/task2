import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Landing from "./component/landingPage/Landing";
import Shop from "./component/Shop";
import Product from "./component/Product";
import Sale from "./component/Sale";
import Order from "./component/Order";
import Brands from "./component/Brands";

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Shop />
        <Product />
        <Sale />
        <Order />
        <Brands />
      </div>
    );
  }
}

export default App;
