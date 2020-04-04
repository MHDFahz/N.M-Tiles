import React, { Component } from "react";
import styled from "styled-components";

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <FooterWrapper>
          <footer className="footers">
            <div className="containers">
              <div className="footers-list">
                <h2> Address </h2>
                <p>
                  N.M Tiles,
                  <br />
                  Chulliyode Road,Sulthan Bathery,
                  <br />
                  Wayanad,Kerala
                  <br />
                  Pin No:673592
                </p>
              </div>
              <div className="footers-list">
                <h2> Opening Hours </h2>
                <p>
                  Monday-Saturday: 8:30am - 8:45pm <br />
                  Sunday: Closed <br />
                </p>
              </div>
              <div className="footers-list">
                <h2> Email Us </h2>
                <p>
                  fahis.skazi@gmail.com
                  <br />
                  shareefnm@gmail.com
                </p>
              </div>
              <div className="footers-list">
                <h2> Contact Us </h2>
                <p>
                  9846513104
                  <br />
                  9495290104
                  <br />
                  04936 220104
                </p>
              </div>
            </div>
            <div className="copyright">
              <p>
                {" "}
                N.M Tiles | Since 1970 <h6>&copy; Copyright 2020 </h6>
              </p>
            </div>
          </footer>
        </FooterWrapper>
      </React.Fragment>
    );
  }
}
const FooterWrapper = styled.footer`
  .footers {
    height: auto;
    text-align: center;
    position: relative;
    background: var(--mainWhite);
    border-top: 5px solid var(--mainWhite);
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .footers .containers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    padding: 2rem 0 2rem 0;
  }

  .footers-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footers-list h2 {
    font-family: arial;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    border-bottom: 1.5px solid #009ffd;
    color: Black;
  }

  .footers-list p {
    font-size: 1.1rem;
    letter-spacing: 1.5px;
    font-family: calibri;
    color: #009ffd !important;
  }

  .footers-list img {
    height: 35px;
  }

  .footers .copyright {
    font-size: 1.5rem;
    font-family: arial;
    text-transform: uppercase;
    color: Black;
    padding-bottom: 0.5rem;
  }
  .footers {
    bottom: 0;
  }
`;
