import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tile from "./Tile";
export default class Something extends Component {
  render() {
    return (
      <SomethingWrap>
        <Tile name=" " title="Items"></Tile>
        <div className="lbody ">
          <div className="containerzz">
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Ceramic Roofing Tile" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p2-2.png"
                    alt="Lamit"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Hollow Clay Block" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p3.png"
                    alt="Hollow Clay Block"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Roofing Tile" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p4.png"
                    alt="Roofing Tile"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "AAC Blocks" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p5.png"
                    alt="AAC Blocks"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Perforated Bricks" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p6.png"
                    alt="Perforated Bricks"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Jolly Bricks" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p7.png"
                    alt="Jolly Bricks"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Ceiling Tile" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p8.png"
                    alt="Ceiling Tile"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Bricks" },
                }}
              >
                <div className="img-container p-5">
                  <img src="img/p9.png" alt="Bricks" className="card-img-top" />
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "All", pass1: "Mini Roofing Tiles" },
                }}
              >
                <div className="img-container p-5">
                  <img
                    src="img/p10.png"
                    alt="Mini Roofing Tiles"
                    className="card-img-top"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </SomethingWrap>
    );
  }
}

const SomethingWrap = styled.div`
  figure {
    position: relative;
  }
  .dis {
    display: flex;
    justify-content: center;
  }

  .home {
    background: url(img/banner-bg.jpg) center center repeat-x;
    position: relative;
    margin-bottom: 12px;
    padding: 100px;
    height: 500px;
  }

  .lbody {
    margin: 0;
    padding: 0;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: consolas;
  }
  .containerzz {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .boxzz {
    width: 250px;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.4s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;
