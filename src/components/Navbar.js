import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo1.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button2";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="N.M Tiles"></img>
        </Link>
        <ul className="navbar-nav  align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link nav-center">
              Products
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav  align-item-center">
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link nav-center">
              About
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="btne">
            <span className="mr-2">
              <i className="fas fa-cart-plus"></i>
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue) !important;
  margin: 0;
  .nav-link {
    color: #009ffd !important;
    font-size: 1.4rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: white !important;
  }
  .nav-link:focus {
    color: white !important;
  }
`;
