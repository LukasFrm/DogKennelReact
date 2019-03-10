import React, { Component } from "react";
import {Switch,Route} from 'react-router-dom'
import "./App.css";
import {IntlProvider} from 'react-intl'
import Navbar from "./components/Navbar"
import AboutUs from "./components/AboutUs"
import Contacts from "./components/Contacts"
import Litters from "./components/Litters"
import OurDogs from "./components/OurDogs"
import Default from "./components/Default"
import Gallery from "./components/Gallery"
import BreedStandards from "./components/BreedStandards"



class App extends Component {
  render() {
    return (
      <IntlProvider locale="lt">
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component= {AboutUs}/>
          <Route  path="/AboutUs" component= {AboutUs}/>
          <Route path="/OurDogs" component= {OurDogs}/>
          <Route path="/Litters" component= {Litters}/>
          <Route path="/Gallery" component= {Gallery}/>
          <Route path="/Contacts" component= {Contacts}/>
          <Route path="/BreedStandards" component= {BreedStandards}/>
          <Route component= {Default}/>
        </Switch>
      </React.Fragment>
      </IntlProvider>
    );
  }
}

export default App;
