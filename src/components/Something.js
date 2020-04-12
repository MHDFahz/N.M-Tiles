import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Tile from "./Tile";
export default class Something extends Component {
  render() {
    return (
      <SomethingWrap>
        <Tile name="our" title="Company's"></Tile>
        <div className="lbody">
          <div className="containerzz">
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/CompanyProduct",
                  state: { pass: "Lamit", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img1.jpg" alt="Lamit" />
                </div>
                <div className="contentzz">
                  <h2>LAMIT ROOFING TILES</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Wienerberger", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img2.jpg" alt="Wienerberger" />
                </div>
                <div className="contentzz">
                  <h2>Wienerberger</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Commonwealth", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img3.jpg" alt="Commonwealth" />
                </div>
                <div className="contentzz">
                  <h2>Commonwealth Trust</h2>
                  <h5>View Product</h5>{" "}
                </div>
              </Link>
            </div>

            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Maxlite AAC Blocks", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img4.jpg" alt="Maxlite AAC Blocks" />
                </div>
                <div className="contentzz">
                  <h2>Maxlite AAC Blocks</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/StarClay",
                  state: { pass: "StarClay", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img5.jpg" alt="Star Clay" />
                </div>
                <div className="contentzz">
                  <h2>Star Clay</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Thomson Tiles", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img6.jpg" alt="Star Clay" />
                </div>
                <div className="contentzz">
                  <h2>Thomson Tiles</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Maxlite AAC Blocks", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img7.jpg" alt="Star Clay" />
                </div>
                <div className="contentzz">
                  <h2>Standard Tiles</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Maxlite AAC Blocks", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img8.jpg" alt="Star Clay" />
                </div>
                <div className="contentzz">
                  <h2>Renacon AAC Blocks</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Maxlite AAC Blocks", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img9.jpg" alt="Star Clay" />
                </div>
                <div className="contentzz">
                  <h2>Piccado</h2>
                  <h5>View Product</h5>
                </div>
              </Link>
            </div>
            <div className="boxzz">
              <Link
                to={{
                  pathname: "/product",
                  state: { pass: "Calicut Tile Company", pass1: "All" },
                }}
              >
                <div className="imgBxzz">
                  <img src="img/img10.jpg" alt="Calicut Tiles" />
                </div>
                <div className="contentzz">
                  <h2>Calicut Tile Company</h2>
                  <h5>View Product</h5>
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
  .containerzz .boxzz {
    position: relative;
    width: 280px;
    height: 220px;
    margin: 20px 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .containerzz .boxzz .imgBxzz {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: #000;
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
    transition-delay: 0.5s;
  }

  .containerzz .boxzz .imgBxzz img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .containerzz .boxzz .contentzz {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55%;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
  }
  .containerzz .boxzz .contentzz h2 {
    margin: 0;
    padding: 0;
    color: #009ffd;
    font-weight: bolder;
    font-size: 20.4px;
  }
  .containerzz .boxzz .contentzz h5 {
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;
  }
  .containerzz .boxzz .contentzz h2,
  .containerzz .boxzz .contentzz p,
  .containerzz .boxzz .contentzz h5 {
    opacity: 0;
    transition: 0.1.5s;
    transform: translateY(20px);
  }
  .containerzz .boxzz:hover .contentzz h2 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.1s;
    text-decoration: none;
  }
  .containerzz .boxzz:hover .contentzz h5 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.3s;
    text-decoration: none;
  }
  img:hover,
  imgBxzz:hover {
    border: 5px solid #009ffd;
  }
`;
