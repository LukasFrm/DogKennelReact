import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormatMessage } from "react-easy-intl";
import LTflag from "./../img/flag_lt.png";
import RUflag from "./../img/flag_ru.png";
import UKflag from "./../img/flag_uk.JPG";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-brown px-sm-5">
          <Link to="/">
            <h2 className="navbar-brand p-0 mb-1">
              <FormatMessage>Brand</FormatMessage>
            </h2>
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item ml-4" />
            <Link to="/AboutUs" className="nav-link">
              <p>
                <FormatMessage>About Us</FormatMessage>
              </p>
            </Link>

            <li className="nav-item ml-4" />
            <Link to="/Gallery" className="nav-link">
              <p>
                <FormatMessage>Gallery</FormatMessage>
              </p>
            </Link>
            <li className="nav-item ml-4" />
            <Link to="/BreedStandards" className="nav-link">
              <p>
                <FormatMessage>Breed Standards</FormatMessage>
              </p>
            </Link>
          </ul>

          <div className="float-right d-inline">
            <Link to="/Contacts" className="nav-link ml-auto">
              <button type="button" className="btn btn-warning ">
                <i className="fas fa-phone" />
                <p className="d-inline ml-2">
                  <FormatMessage>Contacts</FormatMessage>
                </p>
              </button>
            </Link>

            <img
              class="flag"
              src={LTflag}
              alt="lt"
              onClick={() => {
                this.props.setNewLocale("lt");
              }}
            />
            <img
              class="flag"
              src={RUflag}
              alt="ru"
              onClick={() => {
                this.props.setNewLocale("ru");
              }}
            />
            <img
              class="flag"
              src={UKflag}
              alt="en"
              onClick={() => {
                this.props.setNewLocale("en");
              }}
            />
          </div>
        </nav>
      </div>
    );
  }
}
