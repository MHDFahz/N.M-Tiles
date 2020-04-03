import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo1.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button1";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="N.M Tiles" className="ass"></img>
        </Link>

        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link nav-center">
              Products
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav  align-item-center">
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link nav-center">
              Contact
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer className="btn">
            <span className="mr-1">
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
  background: #fff !important;
  margin: 0;
  .nav-link {
    color: #9c7cf8 !important;
    font-size: 1.4rem;
    text-transform: capitalize;
  }
  .nav-link:hover {
    color: #7548f6 !important;
  }
  .nav-link:focus {
    color: #7548f6 !important;
  }
`;
