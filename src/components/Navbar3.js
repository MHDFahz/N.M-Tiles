import React, { Component } from "react";
import styled from "styled-components";

export default class Navbar3 extends Component {
  render() {
    return (
      <NavWrappers>
        <div className="navbar  navbar-dark px-sm-5">
          <header className="headers">
            <div className="header__row">
              <nav className="header__menu menu">
                <div className="menu__icon icon-menu">
                  <span></span>
                </div>
                <div className="menu__body">
                  <ul className="menu__list">
                    <li>
                      <a href="" className="menu__link">
                        about us
                      </a>
                    </li>
                    <li>
                      <a href="" className="menu__link">
                        work
                      </a>
                    </li>
                    <li>
                      <a href="" className="menu__link">
                        shop
                      </a>
                    </li>
                    <li>
                      <a href="" className="menu__link">
                        contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="header__logo">
                <img src="img/logo.png" alt="" />
              </div>
            </div>
          </header>
        </div>
      </NavWrappers>
    );
  }
}
const NavWrappers = styled.nav`
  /*сброс стилей*/
  ul li {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  .headers {
    position: absolute;
    width: 100%;
    z-index: 50;
    top: 35px;
    padding:10px;
    margin:0px;
  }

  .headers .header__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 85px;
  }
  @media (max-width: 767px) {
    .header {
      top: 15px;
    }
  }

  .header__logo {
    position: absolute;
    left: 50%;
    top: -15px;
    -webkit-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
    z-index: 2;
  }

  .menu__list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #4d4959;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    padding: 0;
  }
  .menu__list li {
    position: relative;
    padding: 0 37.5px 0;
  }
  .menu__list li:nth-child(2) {
    padding: 0 110px 0 37.5px;
  }
  .menu__list li:nth-child(3) {
    padding: 0 37.5px 0 110px;
  }
  .menu__list li:after {
    content: "";
    width: 3px;
    height: 3px;
    background-color: #6c6977;
    border-radius: 20%;
    position: absolute;
    right: 0;
    top: 50%;
    margin: 1px 0 0 0;
  }
  .menu__list li:nth-child(2):after {
    display: none;
  }
  .menu__list li:last-child:after {
    display: none;
  }
  @media (max-width: 767px) {
    .header {
        position: absolute;
        width: 100%;
        z-index: 50;
        top: 35px;
      }
      
      .header .header__row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        -webkit-box-align: center;
            -ms-flex-align: center;
                align-items: center;
        height: 85px;
      }
      @media (max-width: 767px) {
        .header {
          top: 35px;
        }
      }
      
      .header__logo {
        position: absolute;
        left: 50%;
        top: -15px;
        -webkit-transform: translate( -50%, 0%);
                transform: translate( -50%, 0%);
        z-index: 2;
        width:100px;
        height:130px;
        
      }
      img {
        width: 100%;
        height: auto;
      }
      
      .menu__list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        color: #4d4959;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2.6px;
        padding: 0;
      }
      .menu__list li {
        position: relative;
        padding: 0 0 0;
      }
      .menu__list li:nth-child(2) {
        padding: 0 15px 0 20.5px;
      }
      .menu__list li:nth-child(3) {
        padding: 0 27.5px 0 110px;
      }
      .menu__list li:after {
        content: '';
        width: 3px;
        height: 3px;
        background-color: #6c6977;
        border-radius: 20%;
        position: absolute;
        right: 0;
        top: 50%;
        margin: 1px 0 0 0;
      }
      .menu__list li:nth-child(2):after {
        display: none;
      }
      .menu__list li:last-child:after {
        display: none;
      }
  `;
