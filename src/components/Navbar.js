import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Globalize } from "react-easy-intl";
import { FormatMessage } from "react-easy-intl";

const messages = {
  en: {
    Brand: "The Loyal Dog",
    "About Us": "About Us",
    "Our Dogs": "Our Dogs",
    Litters: "Litters",
    Gallery: "Gallery",
    "Breed Standards": "Breed Standards",
    Contacts: "Contacts",
    BeaglesText: "Beagles and Jack Russell Terriers",
    MainText1: 'Welcome to the official page of dog litter "The Loyal Dog"!',
    MainText2: 'Litter is registered with the Lithuanian Assosiaction of Cynologists & FCI.',
    MainText3: 'We will happily share our knowledge on how to raise a Terrier, Welsh Springer Spaniel or a Beagle.',


    },
  lt: {
    Brand: "Ištikimas šuo",
    "About Us": "Apie mus",
    "Our Dogs": "Mūsų šunys",
    Litters: "Vados",
    Gallery: "Galerija",
    "Breed Standards": "Veislių standartai",
    Contacts: "Kontaktai",
    BeaglesText: "Bigliai ir Džeko Raselo Terjerai",
    MainText1: 'Sveiki atvykę į veislyno „Ištikimas šuo" tinklapį!',
    MainText2: 'Veislynas registruotas Lietuvos kinologų draugijoje ir FCI.',
    MainText3: 'Mielai pasidalinsime žiniomis ir patirtimi auginant terjerų, valų springerspanielių ar biglių veislės šuniuką.',
  },

  ru: {
    Brand: "Верная собака",
    "About Us": "О нас",
    "Our Dogs": "Наши собаки",
    Litters: "Приплоды",
    Gallery: "Фотогалерея",
    "Breed Standards": "Стандарты породы",
    Contacts: "Контакты ",
    BeaglesText: "Бигли и Джек Рассел Терьеры",
    MainText1: 'Добро пожаловать на официальную страницу питомника собак "Верная собака"! ',
    MainText2: 'Наш питомник зарегистрирован в Литовском обществе кинологов и ФЦИ.',
    MainText3: 'Мы будем рады поделиться своими знаниями и опытом в разведении щенков терьера, вельш-спрингер-спаниеля или бигли.',
  }
};

Globalize.setMessages(messages);
Globalize.setLocale("lt");

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-brown px-sm-5">
          <Link to="/">
            <h2 className="navbar-brand p-0">
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
            <Link to="/OurDogs" className="nav-link">
              <p>
                <FormatMessage>Our Dogs</FormatMessage>
              </p>
            </Link>
            <li className="nav-item ml-4" />
            <Link to="/Litters" className="nav-link">
              <p>
                <FormatMessage>Litters</FormatMessage>
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
            <li>
              <button name='lt' onClick={() => Globalize.setLocale("lt")}>LT </button>
              <button onClick={() => Globalize.setLocale("ru")}>RU </button>
              <button onClick={() => Globalize.setLocale("en")}>ENG</button>
            </li>
          </ul>

          <Link to="/Contacts" className="nav-link ml-auto">
            <button type="button" className="btn btn-warning ">
              <i className="fas fa-phone" />
              <p className="d-inline ml-2"><FormatMessage>Contacts</FormatMessage></p>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
