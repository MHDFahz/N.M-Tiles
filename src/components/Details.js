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
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
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
                  <button
                    className="cart-color"
                    onClick={() => {
                      value.changeImg(id);
                    }}
                    style={{
                      display: company === "Lamit" ? "bolck" : "none",
                    }}
                  >
                    {color1}
                  </button>
                  <br />
                  <div className="py-1">
                    <Link to="/CompanyProduct">
                      <button
                        className=" btn-danger"
                        style={{
                          display: company === "Lamit" ? "bolck" : "none",
                        }}
                      >
                        BACK TO LAMIT
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
