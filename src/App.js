import React, { Component } from "react";
import "./App.css";
import "./styles/index.scss";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logo from "./assets/images/logo.png";
import CartImg from "./assets/images/cart.png";

function App() {
  document.title = "RA sports";
  return (
    <div className="App">
      <Header
        scroller
        headline="WE ARE MORE THAN A BUSINESS,"
        whoWeAre="We are more than a business, we are an en extended family ofyoung,
      open minded, ambitious and always enthusiastic experts with various
      background."
      >
        <Navigation
          menuItems={[
            "Brands",
            "About Ra",
            "Stores",
            "How it work",
            "Ra News",
            "Contact us",
            "Join us"
          ]}
          Logo={Logo}
          hasCart
          cartOptions={{ src: CartImg, holding: 2 }}
          isLogedIn
        />
      </Header>
    </div>
  );
}

export default App;
