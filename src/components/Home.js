import React, { Component } from "react";
import Luggage from "../roofing.jpg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Something from "./Something";
import Itemslist from "./Itemslist";
export default class Home extends Component {
  render() {
    return (
      <HomeStyle>
        <div className="Containers">
          <img src={Luggage} alt="home" className="Imgs" />
          <div className="Overlays" />
          <div className="Headdings">
            <h1 className="Titles">Thoughtful standards for modern House</h1>
            <NavLink
              to={{
                pathname: "/product",
                state: { pass: "All", pass1: "All" },
              }}
            >
              <button className="Btns">Our Products</button>
            </NavLink>
            <img
              src="img/since.png"
              width="100px"
              heigth="100px"
              alt="since 1970"
            />
          </div>
        </div>
        <Itemslist />
        <Something />
      </HomeStyle>
    );
  }
}

const HomeStyle = styled.div`
  position: relative;
  top: 5px;
  .Containers {
    margin-top: -0.3rem;
    background: #ffffff;
    height: 100%;
    position: relative;
  }
  .Containers:after {
    content: ""; // ::before and ::after both require content
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(120deg, #eaee44, #33d0ff);
    opacity: 0.5;
  }
  .Overlays {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 200;
    width: 100%;
    height: 100%;
  }
  .Imgs {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .Headdings {
    position: absolute;
    top: 20%;
    right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    z-index: 300;
  }
  .Titles {
    color: #ffffff;
    font-family: "Rasa", serif;
    font-size: 3rem;
    font-weight: normal;
    margin: 2rem;
  }
  @media only screen and (max-width: 470px) {
    .Titles {
      margin: 1rem;
      font-size: 2rem;
    }
  }

  .Btns {
    margin-bottom: 1rem;
    color: #ffffff;
    border: 2px solid #ffffff;
    width: 10rem;
    padding: 0.5rem 0.5rem;
    text-transform: uppercase;
    font-size: 1rem;
    background: transparent;
    transition-duration: 0.4s;
    cursor: pointer;
    outline: none;
  }
  .Btns:hover {
    background: #ffffff;
    color: #00344b;
  }
`;
