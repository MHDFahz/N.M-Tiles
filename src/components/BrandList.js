import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class BrandList extends Component {
  render() {
    return (
      <div>
        <div className="col-15 mx-auto text-center text-slanted text-blue">
          <Link to="/CompanyProduct">
            <img src="img/lamit.png" alt="Lamit" />
          </Link>
          &nbsp; &nbsp;
          <Link
            to={{
              pathname: "/product",
              state: { pass: "Commonwealth", pass1: "All" },
              refresh: "true",
            }}
          >
            <img
              src="img/comtrust.png"
              alt="comtrust"
              onClick={() => window.location.reload(false)}
            />
          </Link>
          &nbsp; &nbsp;
          <Link
            to={{
              pathname: "/Piccado",
              state: { pass: "Piccado", pass1: "All" },
            }}
          >
            <img src="img/piccado.jpg" alt="piccado" />
          </Link>
          &nbsp; &nbsp;
          <Link
            to={{
              pathname: "/product",
              state: { pass: "Wienerberger", pass1: "All" },
            }}
          >
            <img
              src="img/weinerberger.png"
              alt="weinerberger"
              onClick={() => window.location.reload(false)}
            />
          </Link>
          &nbsp; &nbsp;
          <Link
            to={{
              pathname: "/product",
              state: { pass: "Maxlite AAC Blocks", pass1: "All" },
            }}
          >
            <img
              src="img/maxlite.png"
              alt="piccado"
              onClick={() => window.location.reload(false)}
            />
          </Link>
          <Link
            to={{
              pathname: "/product",
              state: { pass: "Renacon", pass1: "All" },
            }}
          >
            <img
              src="img/renacon.png"
              alt="piccado"
              onClick={() => window.location.reload(false)}
            />
          </Link>
          <Link
            to={{
              pathname: "/product",
              state: { pass: "Thomson Tiles", pass1: "All" },
            }}
          >
            <img
              src="img/thomson.png"
              alt="piccado"
              onClick={() => window.location.reload(false)}
            />
          </Link>
        </div>
      </div>
    );
  }
}
