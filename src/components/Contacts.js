import React, { Component } from "react";
import { FormatMessage } from "react-easy-intl";

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-9 mx-auto mt-5">
            <h2>
              <FormatMessage>ContactsText1</FormatMessage>
            </h2>
            <h3>Virginija Žiedienė</h3>
            <br></br>

            <FormatMessage>ContactsText2</FormatMessage>
            <p><FormatMessage>ContactsText3</FormatMessage></p>
            
            <FormatMessage>ContactsText4</FormatMessage>
            <br></br>

            <br></br>
            <FormatMessage>ContactsText5</FormatMessage>
            
          </div>
        </div>
      </div>
    );
  }
}
