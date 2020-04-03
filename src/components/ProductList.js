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
.headr{
  background: linear-gradient(90deg, #9C7CF8, #7548F6) 100% 30%/70px 60px no-repeat,linear-gradient(90deg, rgba(156,124,248,0.1), rgba(117,72,246,0.1)) 100% 28%/90px 60px no-repeat,linear-gradient(80deg, #1F1737, #1C0D43) 0 0/100% calc(100% - 20px) no-repeat,linear-gradient(90deg, #9C7CF8, #7548F6) 0 100%/35vw 20px no-repeat,linear-gradient(90deg, rgba(156,124,248,0.12), rgba(117,72,246,0.12)) 0 calc(100% - 5px)/39vw 20px no-repeat;  height:100%;
    margin:2rem 4rem;
    background-position:center;

    background-size:cover;
    border-radius:2rem;
    
`;
