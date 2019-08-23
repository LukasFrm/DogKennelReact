import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { addLocaleData } from "react-intl";
import lt from "react-intl/locale-data/lt";
import ru from "react-intl/locale-data/ru";
import en from "react-intl/locale-data/en";
import messages from "./components/messages";
import { Globalize } from "react-easy-intl";
import { IntlProvider } from "react-intl";
import $ from "jquery";

Globalize.setMessages(messages);
Globalize.setLocale("lt");
addLocaleData(lt);
addLocaleData(ru);
addLocaleData(en);
console.log(Globalize.detectLocale)

ReactDOM.render(
  <IntlProvider>
    <Router>
      <App />
    </Router>
  </IntlProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
