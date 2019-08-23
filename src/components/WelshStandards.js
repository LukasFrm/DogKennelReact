import React, { Component } from "react";
import { FormatMessage } from "react-easy-intl";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class WelshStandards extends Component {
  render() {
    return (
      <div className="container p-5">
                <Link to="/BreedStandards" className="goBack">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>
          <FormatMessage>WelshStandard</FormatMessage>
        </h2>        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kvJWumK34AI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
 <br /> <br />
        <div>
          <FormatMessage>WelshText1</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText2</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText3</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText4</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText5</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText6</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText7</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText8</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText9</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>WelshText10</FormatMessage>
        </div>
        <br />
        <Link to="/BreedStandards" className="goBack">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
    );
  }
}

export default WelshStandards;
