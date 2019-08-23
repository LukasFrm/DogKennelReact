import React, { Component } from "react";
import lt from "react-intl/locale-data/lt";
import ru from "react-intl/locale-data/ru";
import en from "react-intl/locale-data/en";
import { addLocaleData } from "react-intl";
import { FormatMessage } from "react-easy-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

addLocaleData(lt);
addLocaleData(ru);
addLocaleData(en);

export default class BeaglesStandard extends Component {
  render() {
    return (
      <div className="container p-5">
        <Link to="/BreedStandards" className="goBack">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>
          <FormatMessage>BeaglesStandard</FormatMessage>
        </h2>
        <h2 />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BAf7lcYEXag"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="video"
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
