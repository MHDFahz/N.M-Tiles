import React, { Component } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button2";
import CompanyTitle from "./Companytitle";
import { ProductConsumer } from "../components/context";
import styled from "styled-components";
export default class CompanyProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <MainWrap>
          <div className="container">
            <CompanyTitle name="Lamit" title="Roof" />
            <center>
              <div>
                <form action="img/lamit_rooftile_catalogue.pdf">
                  <button className="catalog" width="100px" type="submit">
                    View-Catalog
                  </button>
                </form>
              </div>
            </center>
          </div>
          <div className="Containers">
            <img src="img/east-bnr.jpg" alt="home" className="Imgs" />
            <div className="Headdings">
              <h1 className="Titles">EAST ASIAN SERIES</h1>
            </div>
          </div>
        </MainWrap>

        <ProductConsumer>
          {(hello) => {
            return hello.products.map((products) => {
              if (products.company === "Lamit") {
                if (products.type === "EAST ASIAN SERIES")
                  return <Product key={products.id} product={products} />;
              }
            });
          }}
        </ProductConsumer>

        <MainWrap>
          <div className="Containers">
            <img src="img/japanees-bnr.jpg" alt="home" className="Imgs" />
            <div />
            <div className="Headdings">
              <h1 className="Titles">JAPANESE SERIES</h1>
            </div>
          </div>

          <ProductConsumer>
            {(hello) => {
              return hello.products.map((products) => {
                if (products.company === "Lamit") {
                  if (products.type === "JAPANESE SERIES")
                    return <Product key={products.id} product={products} />;
                }
              });
            }}
          </ProductConsumer>

          <div className="Containers">
            <img src="img/roman-bnr.jpg" alt="home" className="Imgs" />
            <div />
            <div className="Headdings">
              <h1 className="Titles">ROMAN SERIES</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return hello.products.map((products) => {
                    if (products.company === "Lamit") {
                      if (products.type === "ROMAN SERIES")
                        return <Product key={products.id} product={products} />;
                    }
                  });
                }}
              </ProductConsumer>
            </div>
          </div>

          <div className="Containers">
            <img src="img/spanish-bnr.jpg" alt="home" className="Imgs" />
            <div />
            <div className="Headdings">
              <h1 className="Titles">SPANISH SERIES</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return hello.products.map((products) => {
                    if (products.company === "Lamit") {
                      if (products.type === "SPANISH SERIES")
                        return <Product key={products.id} product={products} />;
                    }
                  });
                }}
              </ProductConsumer>
            </div>
          </div>

          <div className="Containers">
            <img src="img/french-bnr.jpg" alt="home" className="Imgs" />
            <div />
            <div className="Headdings">
              <h1 className="Titles">FRENCH SERIES</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return hello.products.map((products) => {
                    if (products.company === "Lamit") {
                      if (products.type === "FRENCH SERIES")
                        return <Product key={products.id} product={products} />;
                    }
                  });
                }}
              </ProductConsumer>
            </div>
          </div>

          <div className="Containers">
            <img src="img/german-banner.jpg" alt="home" className="Imgs" />
            <div />
            <div className="Headdings">
              <h1 className="Titles">GERMAN SERIES</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <ProductConsumer>
                {(hello) => {
                  return hello.products.map((products) => {
                    if (products.company === "Lamit") {
                      if (products.type === "GERMAN SERIES")
                        return <Product key={products.id} product={products} />;
                    }
                  });
                }}
              </ProductConsumer>
            </div>
          </div>

          <div className="productbutton">
            <Link
              to={{
                pathname: "/product",
                state: {
                  pass: "All",
                },
              }}
            >
              <center>
                <ButtonContainer>Back to Products</ButtonContainer>
              </center>
            </Link>
          </div>
        </MainWrap>
      </React.Fragment>
    );
  }
}
const MainWrap = styled.div`
.productbutton{
  margin:auto;
}
.catalog {
  background-color: #009ffd; /* Green */
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.Containers {
    margin: 1rem 2rem 2rem 2rem;
    background: #ffffff;
    height: 100%;
    position: relative;
  }
 
  .Imgs {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
  .Headdings {
    position: absolute;
    top: 25%;
    right: 28%;
    align-items: center;
    width: 40%;
    z-index: 300;
  }
  .Headds {
    position: absolute;
    top: 0;
    right: 28%;
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
`;
