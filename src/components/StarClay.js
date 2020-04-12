import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../components/context";
import Product from "./Product";

export default class StarClay extends Component {
  render() {
    return (
      <StaClay>
        <div className="bg">
          <div className="Containers">
            <img src="img/starclay1.gif" alt="home" className="Imgs" />

            <div className="Headdings">
              <h1 className="Titles">StarClay Teracotta Tiles</h1>
              <button className="Btns">
                <img src="img/starclay.png" className="logos" alt="starclay" />
              </button>
            </div>
          </div>
          <center>
            <h1>100% Natural</h1>
            <h1>No artificial colours & Chemicals</h1>
            <hr />
            <hr />
            <h1>Products</h1>
          </center>

          <ProductConsumer>
            {(hello) => {
              return hello.products.map((products) => {
                if (products.company === "Star Clay Tiles") {
                  return <Product key={products.id} product={products} />;
                }
              });
            }}
          </ProductConsumer>
        </div>
      </StaClay>
    );
  }
}
const StaClay = styled.div`
  .card {
    background-color: transparent;
  }
  .bg {
    width: 100%;
    margin: 0px;
    background-image: url(img/bg.gif);
    height: 100%;
  }
  position: relative;

  .Containers {
    height: 100%;
    position: relative;
  }
  .Imgs {
    width: 500px;
    height: 80vh;
    object-fit: fit;
  }
  .logs {
    object-fit: fit;
    height: 50px;
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
    cursor: pointer;
    background: transparent;
    outline: none;
  }
  .Btns:hover {
    background-color: rgba(12, 12, 12, 0.5);
  }
`;
