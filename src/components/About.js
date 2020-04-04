import React, { Component } from "react";
import styled from "styled-components";
export default class About extends Component {
  render() {
    return (
      <AboutWrap>
        <div>
          <div class="contact1">
            <div class="container-contact1">
              <div class="contact1-pic js-tilt" data-tilt>
                <img src="img/img-01.png" alt="IMG" />
              </div>

              <form class="contact1-form validate-form" data-netlify="true">
                <span class="contact1-form-title">Get in touch</span>

                <div
                  class="wrap-input1 validate-input"
                  data-validate="Name is required"
                >
                  <input
                    class="input1"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div
                  class="wrap-input1 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    class="input1"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div
                  class="wrap-input1 validate-input"
                  data-validate="Subject is required"
                >
                  <input
                    class="input1"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                  <span class="shadow-input1"></span>
                </div>

                <div
                  class="wrap-input1 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    class="input1"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                  <span class="shadow-input1"></span>
                </div>

                <div class="container-contact1-form-btn">
                  <button class="contact1-form-btn">
                    <span>
                      Send Email
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AboutWrap>
    );
  }
}

const AboutWrap = styled.div`
  /*//////////////////////////////////////////////////////////////////
[ FONT ]*/

  @font-face {
    font-family: Montserrat-Regular;
    src: url("../fonts/montserrat/Montserrat-Regular.ttf");
  }

  @font-face {
    font-family: Montserrat-Bold;
    src: url("../fonts/montserrat/Montserrat-Bold.ttf");
  }

  @font-face {
    font-family: Montserrat-ExtraBold;
    src: url("../fonts/montserrat/Montserrat-ExtraBold.ttf");
  }

  @font-face {
    font-family: Montserrat-Medium;
    src: url("../fonts/montserrat/Montserrat-Medium.ttf");
  }

  /*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    font-family: Montserrat-Regular, sans-serif;
  }

  /*---------------------------------------------*/
  a {
    font-family: Montserrat-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #57b846;
  }

  /*---------------------------------------------*/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    font-family: Montserrat-Regular;
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul,
  li {
    margin: 0px;
    list-style-type: none;
  }

  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input::-webkit-input-placeholder {
    color: #999999;
  }
  input:-moz-placeholder {
    color: #999999;
  }
  input::-moz-placeholder {
    color: #999999;
  }
  input:-ms-input-placeholder {
    color: #999999;
  }

  textarea::-webkit-input-placeholder {
    color: #999999;
  }
  textarea:-moz-placeholder {
    color: #999999;
  }
  textarea::-moz-placeholder {
    color: #999999;
  }
  textarea:-ms-input-placeholder {
    color: #999999;
  }

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }

  /*//////////////////////////////////////////////////////////////////
[ Contact 1 ]*/

  .contact1 {
    width: 100%;
    min-height: 100%;
    padding: 15px;

    background: white;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .container-contact1 {
    width: 1163px;
    background: var(--mainWhite);
    border-radius: 10px;
    overflow: hidden;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    padding: 90px 130px 88px 148px;
  }

  /*------------------------------------------------------------------
[  ]*/
  .contact1-pic {
    width: 296px;
  }

  .contact1-pic img {
    max-width: 100%;
  }

  /*------------------------------------------------------------------
[  ]*/
  .contact1-form {
    width: 390px;
  }

  .contact1-form-title {
    display: block;
    font-family: Montserrat-ExtraBold;
    font-size: 24px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
    padding-bottom: 44px;
  }

  input.input1 {
    height: 50px;
    border-radius: 25px;
    padding: 0 30px;
  }
  input.input1 + .shadow-input1 {
    border-radius: 25px;
  }

  textarea.input1 {
    min-height: 150px;
    border-radius: 25px;
    padding: 12px 30px;
  }
  textarea.input1 + .shadow-input1 {
    border-radius: 25px;
  }

  /*---------------------------------------------*/
  .wrap-input1 {
    position: relative;
    width: 100%;
    z-index: 1;
    margin-bottom: 20px;
  }

  .input1 {
    display: block;
    width: 100%;
    background: #e6e6e6;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #666666;
  }

  .shadow-input1 {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 0px 0px;
    color: rgba(87, 184, 70, 0.5);
  }

  .input1:focus + .shadow-input1 {
    -webkit-animation: anim-shadow 0.5s ease-in-out forwards;
    animation: anim-shadow 0.5s ease-in-out forwards;
  }

  @-webkit-keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  @keyframes anim-shadow {
    to {
      box-shadow: 0px 0px 80px 30px;
      opacity: 0;
    }
  }

  /*---------------------------------------------*/
  .container-contact1-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact1-form-btn {
    min-width: 193px;
    height: 50px;
    border-radius: 25px;
    background: #57b846;
    font-family: Montserrat-Bold;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 25px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn i {
    margin-left: 7px;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .contact1-form-btn:hover {
    background: #333333;
  }

  .contact1-form-btn:hover i {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }

  /*------------------------------------------------------------------
[ Responsive ]*/

  @media (max-width: 1200px) {
    .contact1-pic {
      width: 33.5%;
    }

    .contact1-form {
      width: 44%;
    }
  }

  @media (max-width: 992px) {
    .container-contact1 {
      padding: 90px 80px 88px 90px;
    }

    .contact1-pic {
      width: 35%;
    }

    .contact1-form {
      width: 55%;
    }
  }

  @media (max-width: 768px) {
    .container-contact1 {
      padding: 90px 80px 88px 80px;
    }

    .contact1-pic {
      display: none;
    }

    .contact1-form {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .container-contact1 {
      padding: 90px 15px 88px 15px;
    }
  }

  /*------------------------------------------------------------------
[ Alert validate ]*/

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: white;
    border: 1px solid #c80000;
    border-radius: 13px;
    padding: 4px 25px 4px 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 8px;
    pointer-events: none;

    font-family: Montserrat-Medium;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: "\f06a";
    font-family: FontAwesome;
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 15px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 13px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }
`;
