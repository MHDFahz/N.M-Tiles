import React, { Component } from "react";
import Product from "./Product";
import Title from "./Tile";
import { ProductConsumer } from "../components/context";
import styled from "styled-components";
import BrandList from "./BrandList";

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

                <div className="col-10 mx-auto text-center text-slanted text-blue">
                  <br />
                  <BrandList></BrandList>
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
                          <option value="Piccado">Piccado</option>
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
                          <option value="Hollow Clay Block">
                            Hollow Clay Block
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
    border: 0 !important;
    color: #eee !important;
    background: transparent !important;
    font-size: 20px !important;
    font-weight: bold !important;
    padding: 2px 10px !important;
    width: 300px !important;
    *width: 300px !important;
    *background: #009ffd !important;
    -webkit-appearance: none !important;
  }

  #mainselection {
    overflow: hidden !important;
    width: 300px !important;
    -moz-border-radius: 9px 9px 9px 9px !important;
    -webkit-border-radius: 9px 9px 9px 9px !important;
    border-radius: 9px 9px 9px 9px !important;
    box-shadow: 1px 1px 11px #330033 !important;
    background: #009ffd no-repeat scroll 319px center !important;
  }
`;
