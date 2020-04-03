import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./components/Navbar2";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import Modal from "./components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar1></Navbar1>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/Details" component={Details}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
