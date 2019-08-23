import React, { Component } from "react";
import { FormatMessage } from "react-easy-intl";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class RusellStandard extends Component {
  render() {
    return (
      <div className="container p-5">
                <Link to="/BreedStandards" className="goBack">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>
          <FormatMessage>RusellStandard</FormatMessage>
        </h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/31W1kZh5Z1w"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <br /> <br />
        <div>
          <FormatMessage>RusellText1</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText2</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText3</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText4</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText5</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText6</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText7</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText8</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText9</FormatMessage>
        </div>
        <br />
        <div>
          <FormatMessage>RusellText10</FormatMessage>
        </div>
        <br />
        <Link to="/BreedStandards" className="goBack">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
    );
  }
}

export default RusellStandard;
