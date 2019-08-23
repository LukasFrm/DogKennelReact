import React, { Component } from "react";
import { FormatMessage } from "react-easy-intl";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-11 mx-auto p-0 text-center h-100">
          <div className="BeaglesCov col-12" />
          <div className="main-text my-5">
            <h3>
              <FormatMessage>BeaglesText</FormatMessage>
            </h3>
            <p>
              <FormatMessage>MainText1</FormatMessage>
            </p>
            <p>
              <FormatMessage>MainText2</FormatMessage>
            </p>
            <p className="mb-0">
              <FormatMessage>MainText3</FormatMessage>
            </p>
            <div className="videos col-12 my-4">
              <iframe
                width="560"
                height="315"
                title="1"
                src="https://www.youtube.com/embed/xbCphiBIf2E"
                frameborder="15"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                width="560"
                height="315"
                title="2"
                src="https://www.youtube.com/embed/WWGf9r5fFSo"
                frameborder="15"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <iframe
                width="560"
                height="315"
                title="3"
                src="https://www.youtube.com/embed/qEB2HWaCaog"
                frameborder="15"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
