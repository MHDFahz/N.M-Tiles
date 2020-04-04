import React, { Component } from "react";
import styled from "styled-components";
import Tile from "./Tile";
export default class Something extends Component {
  render() {
    return (
      <SomethingWrap>
        <Tile name="our" title="Company's"></Tile>
        <div className="lbody">
          <div className="containerzz">
            <div className="boxzz">
              <div className="imgBxzz">
                <img src="img/img1.jpg" />
              </div>
              <div className="contentzz">
                <h2>LAMIT ROOFING TILES</h2>
                <p>
                  Best quality roof tile at an affordable price from Lamit
                  group.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="boxzz">
              <div className="imgBxzz">
                <img src="img/img2.jpg" />
              </div>
              <div className="contentzz">
                <h2>Wienerberger</h2>
                <p>
                  200 years of improving quality of living Wall | Facade | Roof.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="boxzz">
              <div className="imgBxzz">
                <img src="img/img3.jpg" />
              </div>
              <div className="contentzz">
                <h2>Commonwealth Trust</h2>
                <p>
                  Commonwealth is one of the top Roofing Tile dealers in
                  Kerala.With Over 175 year experience
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="boxzz">
              <div className="imgBxzz">
                <img src="img/img4.jpg" />
              </div>
              <div className="contentzz">
                <h2>Maxlite AAC Blocks</h2>
                <p>
                  Maxlite AAC Blocks is a industrial units involved in
                  manufacturing wide range products.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </SomethingWrap>
    );
  }
}

const SomethingWrap = styled.div`
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
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .containerzz .boxzz {
    position: relative;
    width: 280px;
    height: 400px;
    margin: 20px 0;
    box-sizing: border-box;
    overflow: hidden;
  }
  .containerzz .boxzz .imgBxzz {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    clip-path: circle(400px at center 100px);
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  .containerzz .boxzz:hover .imgBxzz {
    clip-path: circle(80px at center 100px);
    transition-delay: 0s;
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
  }
  .containerzz .boxzz .contentzz a {
    text-decoration: none;
    background: #000;
    color: #fff;
    padding: 5px;
    display: inline-block;
  }
  .containerzz .boxzz .contentzz h2,
  .containerzz .boxzz .contentzz p,
  .containerzz .boxzz .contentzz a {
    opacity: 0;
    transition: 0.5s;
    transform: translateY(20px);
  }
  .containerzz .boxzz:hover .contentzz h2 {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  }
  .containerzz .boxzz:hover .contentzz p {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.7s;
  }
  .containerzz .boxzz:hover .contentzz a {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.9s;
  }
`;
