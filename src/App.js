import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { IntlProvider } from "react-intl";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
import Litters from "./components/Litters";
import Default from "./components/Default";
import Gallery from "./components/Gallery";
import BreedStandards from "./components/BreedStandards";
import { Globalize } from "react-easy-intl";
import BeaglesStandard from "./components/BeaglesStandard";
import RusellStandard from "./components/RusellStandard";
import WelshStandards from "./components/WelshStandards";
import { FormatMessage, FormattedHTMLMessage } from "react-easy-intl";
import messages from "./components/messages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preventShowing: false,
      textToChange: "unchanged"
    };

    this.setNewLocale = this.setNewLocale.bind(this);

    // Globalize.setMessages(messages);
    // Globalize.setLocale("lt");
  }
  componentDidMount() {
    // console.log(document.getElementsByTagName("span")[6].textContent)
  }

  // componentWillReceiveProps() {
  //   console.log("componentWillReceiveProps launched")
  //   this.setState({
  //     textToChange: document.getElementsByTagName("span")[6].textContent
  //   });
  //   this.forceUpdate()

  // }



  setNewLocale(x) {
    Globalize.setLocale(x);
    // console.log(document.getElementsByTagName("span")[6].textContent)
    //Does not re-render on it's own, hence the
    this.forceUpdate();


  }

  render() {
    var { textToChange } = this.state;

    return (
      <div>
        {/* I presume, the best primitive way of asigning props to a component while not rendering it? Would like to know a more sophisticated way...  */}
        {this.state.preventShowing && (
          <BeaglesStandard
            messages={this.messages}
            setNewLocale={this.setNewLocale}
            textToChange={textToChange}
          />
        )}
        <IntlProvider locale="lt" messages={messages}>
          <React.Fragment>
            <Navbar setNewLocale={this.setNewLocale} />

            <Switch >
              <Route exact path="/" component={AboutUs} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Litters" component={Litters} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Contacts" component={Contacts} />
              <Route
                path="/BreedStandards/BeaglesStandard"
                component={BeaglesStandard}
              />
              <Route
                path="/BreedStandards/RusellStandard"
                component={RusellStandard}
              />
              <Route
                path="/BreedStandards/WelshStandard"
                component={WelshStandards}
              />
              <Route path="/BreedStandards" component={BreedStandards} />
              <Route component={Default} />
            </Switch>
          </React.Fragment>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
