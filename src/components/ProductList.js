import React, { Component } from "react";
import Product from "./Product";
import Title from "./Tile";
import { ProductConsumer } from "../components/context";
import styled from "styled-components";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Main>
          <div className="headr">
            <div className="py-5">
              <div className="container">
                <Title name="our" title="product" />
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <br />
                  <label for="Item">Items : -</label>
                  <select id="Item" name="Item">
                    <option value="Single Grove">Single Grove</option>
                    <option value="Double Groove">Double Groove</option>
                    <option value="Glass Tile">Glass Tile</option>
                    <option value="Ridge Tile">Ridge Tile</option>
                    <option value="Decorative Ridge">Decorative Ridge</option>
                    <option value="Taylor Tile">Taylor Tile</option>
                    <option value="Ceiling Tile">Ceiling Tile</option>
                    <option value="Dome">Dome</option>
                  </select>

                  <label for="Company"> Company : -</label>
                  <select id="Company">
                    <option value="Calicut Tile Company">
                      Calicut Tile Company
                    </option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="row">
                  <ProductConsumer>
                    {hello => {
                      return hello.products.map(products => {
                        return <Product key={products.id} product={products} />;
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
  .headr {
  }
`;
