import React, { Component } from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button2";
import nl2br from "react-newline-to-break";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
            color1,
            color,
          } = value.detailProduct;

          console.log(this.props);
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 large">
                  <img src={img} className="img-fluid small" alt="product" />
                </div>

                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Model : {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Made By : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$ {price}</span>
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Product Info:
                  </p>
                  <p className="text-muted lead">{nl2br(info)}</p>
                  {/* button */}

                  <div
                    style={{
                      display: color1 ? "bolck" : "none",
                    }}
                  >
                    Color : {color}
                    <br></br>
                    <button
                      className="button"
                      onClick={() => {
                        value.changeImg(id);
                      }}
                    >
                      <span>{color1}</span>
                    </button>
                    &nbsp;&nbsp;&nbsp;&lt;-- Color Change
                  </div>
                  <div
                    className="py-1"
                    style={{
                      display: company === "Lamit" ? "bolck" : "none",
                    }}
                  >
                    <Link to="/CompanyProduct">
                      <button className="button">
                        <span> LAMIT</span>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="py-1"
                    style={{
                      display: company === "Piccado" ? "bolck" : "none",
                    }}
                  >
                    <Link to="/Piccado">
                      <button className="button">
                        <span> PICCADO</span>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="py-1"
                    style={{
                      display: company === "Thomson Tiles" ? "bolck" : "none",
                    }}
                  >
                    <Link
                      to={{
                        pathname: "/product",
                        state: { pass: "Thomson Tiles", pass1: "All" },
                      }}
                    >
                      <button className="button">
                        <span> Thomson Tiles</span>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="py-1"
                    style={{
                      display:
                        company === "Calicut Tile Company" ? "bolck" : "none",
                    }}
                  >
                    <Link
                      to={{
                        pathname: "/product",
                        state: { pass: "Calicut Tile Company", pass1: "All" },
                      }}
                    >
                      <button className="button">
                        <span> Calicut Tiles</span>
                      </button>
                    </Link>
                  </div>

                  <div>
                    <Link
                      to={{
                        pathname: "/product",
                        state: {
                          pass: this.props.location.state.pass,
                        },
                      }}
                    >
                      <ButtonContainer>Back to Products</ButtonContainer>
                    </Link>

                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
