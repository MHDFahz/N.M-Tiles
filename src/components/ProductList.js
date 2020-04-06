import React, { Component } from "react";
import Product from "./Product";
import Title from "./Tile";
import { ProductConsumer } from "../components/context";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.location.state.pass,
      values: "All",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChang = this.handleChang.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, props) {
    this.setState({ value: event.target.value });
  }
  handleChang(event) {
    this.setState({ values: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Main>
          <div className="headr">
            <div className="py-5">
              <div className="container">
                <Title name="our" title="product" />
                <div className="py-1">
                  <Link to="/CompanyProduct">
                    <img src="img/lamit.png" alt="Lamit" />
                  </Link>
                </div>
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <br />

                  <form onSubmit={this.handleSubmit}>
                    <label for="Company">
                      <h3>
                        Company : -<br></br>
                      </h3>
                      <div id="mainselection">
                        <select
                          value={this.state.value}
                          onChange={this.handleChange}
                          id="Company"
                        >
                          <option value="All">All</option>
                          <option value="Calicut Tile Company">
                            Calicut Tile Company
                          </option>
                          <option value="Commonwealth">Commonwealth</option>
                          <option value="Wienerberger">Wienerberger</option>
                          <option value="Lamit">Lamit</option>

                          <option value="Maxlite AAC Blocks">
                            Maxlite AAC Blocks
                          </option>
                        </select>
                      </div>
                    </label>
                    &nbsp;&nbsp;
                    <label for="Company">
                      <h3>
                        Items : -<br></br>
                      </h3>
                      <div id="mainselection">
                        <select
                          value={this.state.values}
                          onChange={this.handleChang}
                          id="Company"
                        >
                          <option value="All">All</option>
                          <option value="Ceramic Roofing Tile">
                            Ceramic Roofing Tile
                          </option>
                          <option value="Roofing Tile">Roofing Tile</option>
                          <option value="Glass Tile">Glass Tile</option>
                          <option value="Ridge Tile">Ridge Tile</option>
                          <option value="Ceiling Tile">Ceiling Tile</option>
                          <option value="Ventilator Tile">
                            Ventilator Tile
                          </option>
                        </select>
                      </div>
                    </label>
                  </form>
                </div>
                <div className="row">
                  <ProductConsumer>
                    {(hello) => {
                      return hello.products.map((products) => {
                        if (products.company === this.state.value) {
                          if (products.item === this.state.values) {
                            return (
                              <Product
                                key={products.id}
                                product={products}
                                loc={this.state.value}
                              />
                            );
                          } else if (this.state.values === "All") {
                            return (
                              <Product
                                key={products.id}
                                product={products}
                                loc={this.state.value}
                              />
                            );
                          }
                        } else if (this.state.value === "All") {
                          if (products.item === this.state.values) {
                            return (
                              <Product
                                key={products.id}
                                product={products}
                                loc={this.state.value}
                              />
                            );
                          } else if (this.state.values === "All") {
                            return (
                              <Product
                                key={products.id}
                                product={products}
                                loc={this.state.value}
                              />
                            );
                          }
                        }
                      });
                    }}
                  </ProductConsumer>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </React.Fragment>
    );
  }
}
const Main = styled.div`
  #mainselection select {
    border: 0;
    color: #eee;
    background: transparent;
    font-size: 20px;
    font-weight: bold;
    padding: 2px 10px;
    width: 300px;
    *width: 300px;
    *background: #009ffd;
    -webkit-appearance: none;
  }

  #mainselection {
    overflow: hidden;
    width: 300px;
    -moz-border-radius: 9px 9px 9px 9px;
    -webkit-border-radius: 9px 9px 9px 9px;
    border-radius: 9px 9px 9px 9px;
    box-shadow: 1px 1px 11px #330033;
    background: #009ffd no-repeat scroll 319px center;
  }
`;
