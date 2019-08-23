import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormatMessage } from "react-easy-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default class BreedStandards extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center mt-5 p-5">
          <Link
            to="/BreedStandards/BeaglesStandard"
            className="nav-link text-light dotted "
          >
            <p>
              {" "}
              <FormatMessage>BeaglesStandard</FormatMessage>
            </p>
          </Link>
          <br />
          <Link
            to="/BreedStandards/RusellStandard"
            className="nav-link text-light dotted"
          >
            <p>
              {" "}
              <FormatMessage>RusellStandard</FormatMessage>
            </p>
          </Link>
          <br />
          <Link
            to="/BreedStandards/WelshStandard"
            className="nav-link text-light dotted"
          >
            <p>          <FormatMessage>WelshStandard</FormatMessage>
</p>
          </Link>
        </h2>
      </div>
    );
  }
}
