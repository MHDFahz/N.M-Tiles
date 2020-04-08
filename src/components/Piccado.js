import React, { Component } from "react";
import styled from "styled-components";

export default class Piccado extends Component {
  render() {
    return (
      <PiccadoWrapper>
        <div>
          <section className="home-banner-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="img/logo.svg" className="img-fluid pname" alt="" />
                </div>
                <div className="col-md-6">
                  <figure className="anm-element">
                    <img
                      src="img/p1.png"
                      className="img-fluid back-scnd "
                      alt=""
                    />
                    <img src="img/p2.png" className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section class="product-main-wrap">
          <div class="container-fluid ">
            <div class="row no-gutters">
              <div class="col-lg-6">
                <div class="product-main-inner pro_bg_two">
                  <h3>CERAMIC </h3>
                  <h4>roof tiles</h4>
                  <img src="img/pro1.png" class="img-fluid" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="product-main-inner pro_bg_two">
                  <h3>Earthen </h3>
                  <h4>roof tiles</h4>
                  <img src="img/pro2.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="product-list-wrap">
          <div class="container-fluid">
            <div class="row justify-content-md-center">
              <div class="col-lg-4">
                <div class="pro-head">
                  <h4> our products </h4>
                  <div class="pro-nav prev">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                  </div>
                  <div class="pro-nav next">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PiccadoWrapper>
    );
  }
}
const PiccadoWrapper = styled.div`
  @font-face {
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-weight: normal;
    font-style: normal;
  }
  .home-banner-wrap {
    background: url(img/banner-bg.jpg) center center repeat-x;
    position: relative;
    padding: 100px;
  }
  .home-banner-wrap .pname {
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }

  figure {
    position: relative;
  }
  figure .back-scnd {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  figure .back-img {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .product-main-wrap {
    color: #fff;
  }
  .product-main-wrap .container-fluid {
    padding: 0;
  }
  .product-main-wrap .container-fluid .product-main-inner {
    padding: 35px;
  }
  .product-main-wrap .container-fluid .product-main-inner h3 {
    font-family: "sinkin_sans100_thin";
    font-size: 40px;
  }
  .product-main-wrap .container-fluid .product-main-inner h4 {
    font-family: "sinkin_sans800_black";
    text-transform: uppercase;
    font-size: 20px;
  }
  .product-main-wrap .container-fluid .product-main-inner img {
    margin-top: 15px;
    margin-left: -10px;
  }
  .product-main-wrap .container-fluid .product-main-inner:hover {
    background: url(img/red-pattern.png);
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  .product-main-wrap .container-fluid .pro_bg_one {
    background: url(img/pro-b1.png);
  }
  .product-main-wrap .container-fluid .pro_bg_two {
    background: url(img/pro-b2.png);
  }
  .product-main-wrap .container-fluid .pro_bg_three {
    background: url(img/pro-b3.png);
  }

  .product-list-wrap {
    margin: 30px 0;
  }
  .product-list-wrap .pro-head {
    position: relative;
  }
  .product-list-wrap .pro-head h4 {
    font-family: "sinkin_sans400_regular";
    font-size: 30px;
    text-align: center;
    color: #4e4e4e;
    margin-bottom: 60px;
  }
  .product-list-wrap .pro-head .pro-nav {
    position: absolute;
    width: 78px;
    height: 45px;
    background-color: #fff;
    padding: 3px;
    text-align: center;
    font-size: 25px;
    color: #6f030f;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  .product-list-wrap .pro-head .pro-nav:hover {
    background-color: #6f030f;
    color: #fff;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
    box-shadow: -1px 3px 13px 0px rgba(0, 0, 0, 0.33);
  }
  .product-list-wrap .pro-head .pro-nav.prev {
    left: 0;
    top: 0;
  }
  .product-list-wrap .pro-head .pro-nav.next {
    right: 0;
    top: 0;
  }
  .product-list-wrap .products_inner figure {
    position: relative;
    box-shadow: -2px 2px 24px -1px rgba(0, 0, 0, 0.09);
    display: inline-block;
    padding: 15px 30px 0px 30px;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  .product-list-wrap .products_inner figure .pr_name {
    border-left: 5px solid #5b6879;
    padding-left: 10px;
    margin-top: 15px;
  }
  .product-list-wrap .products_inner figure .pr_name h5 {
    font-size: 18px;
    font-family: "sinkin_sans400_regular";
    color: #ba2031;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .product-list-wrap .products_inner figure .pr_name p {
    font-size: 16px;
    font-family: "sinkin_sans400_regular";
  }
  .product-list-wrap .products_inner figure:hover {
    box-shadow: -10px 0px 13px -7px #adadad, 10px 0px 13px -7px #adadad,
      0px 4px 47px 16px rgba(0, 0, 0, 0);
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  footer {
    background: url(img/banner-bg.jpg) repeat center center;
    padding: 20px;
  }
  footer .footer-conatct {
    text-align: center;
  }
  footer .footer-conatct span {
    color: #fff;
    width: 62px;
    height: 62px;
    border-radius: 100%;
    background-color: #a41c2b;
    box-shadow: -1px 3px 13px 0px rgba(0, 0, 0, 0.33);
    display: inline-block;
    padding: 10px;
    font-size: 27px;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  footer .footer-conatct span:hover {
    background-color: #fff;
    color: #a41c2b;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }
  footer .footer-conatct h5 {
    font-family: "sinkin_sans400_regular";
    margin: 10px 0;
    color: #fff;
  }
  footer .footer-conatct p {
    color: #6f030f;
  }
  footer .footer-conatct p a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    font-family: "sinkin_sans400_regular";
  }
  footer .footer-conatct p a:hover {
    color: #edd616;
  }
  footer .footer-conatct .ruler {
    height: 1px;
    width: 100%;
    background-color: #9d1927;
    margin: 30px 0;
  }

  @media (max-width: 1200px) {
    .product-list-wrap .pro-head .pro-nav.next {
      right: -66px;
    }

    .product-list-wrap .pro-head .pro-nav.prev {
      left: -51px;
    }
  }
  @media (max-width: 991px) {
    home-banner-wrap figure .back-scnd {
      left: 66%;
    }

    .product-list-wrap .pro-head .pro-nav.next {
      right: 0px;
    }

    .product-list-wrap .pro-head .pro-nav.prev {
      left: 0px;
    }

    .product-main-wrap .container-fluid {
      text-align: center;
    }
  }
  @media (max-width: 768px) {
    .home-banner-wrap figure {
      position: relative;
      margin: 61px auto;
    }
  }
  @media (max-width: 576px) {
    .home-banner-wrap {
      padding: 45px;
    }

    .product-list-wrap .pro-head .pro-nav.next {
      right: -10px;
      top: 0;
    }

    .product-list-wrap .pro-head .pro-nav.prev {
      left: -6px;
    }

    .product-list-wrap .pro-head .pro-nav {
      width: 38px;
    }

    .home-banner-wrap figure .back-scnd {
      left: 61%;
    }
  }
`;
