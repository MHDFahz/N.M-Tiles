import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar1 from "./components/Navbar2";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar1></Navbar1>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Product" component={ProductList}></Route>
          <Route path="/Details" component={Details}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
