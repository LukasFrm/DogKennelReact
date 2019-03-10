import React, { Component } from "react";
import Beagles from "/Users/Lukas/code/E-shop/src/img/Beagles.png";
import { FormatMessage } from "react-easy-intl";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9 mx-auto bg-light p-0">
            <img src={Beagles} alt="Beagles" className="BeaglesCov" />
            <h3 className="intro-text">
              <FormatMessage>BeaglesText</FormatMessage>
            </h3>
            <div className="main-text">
              <p>
                <FormatMessage>MainText1</FormatMessage>
              </p>
              <p>
                <FormatMessage>MainText2</FormatMessage>
              </p>
              <p className="mb-0">
                <FormatMessage>MainText3</FormatMessage>
              </p>
              <div className="videos">
                <iframe
                  width="560"
                  height="315"
                  title='1'
                  src="https://www.youtube.com/embed/xbCphiBIf2E"
                  frameborder="15"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <iframe
                  width="560"
                  height="315"
                  title='2'
                  src="https://www.youtube.com/embed/WWGf9r5fFSo"
                  frameborder="15"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <iframe
                  width="560"
                  height="315"
                  title='3'
                  src="https://www.youtube.com/embed/qEB2HWaCaog"
                  frameborder="15"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
                <iframe
                  width="560"
                  height="315"
                  title='4'
                  src="https://www.youtube.com/embed/ecSbhd6q0OE"
                  frameborder="15"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
