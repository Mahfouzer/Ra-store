import React, { Component } from "react";

//Styles
import "./styles/index.scss";

//Components
import Header from "./components/Header";
import ShowSet from "./components/ShowSet";
import Navigation from "./components/Navigation";

//images
import Logo from "./assets/images/logo.png";
import CartImg from "./assets/images/cart.png";
import storeLogo from "./assets/images/storelogo.png";
import about from "./assets/images/about.png";

//mock data
import stores from "./mockData/store.json";
import news from "./mockData/news.json";

function App() {
  document.title = "RA sports";

  const renderSet = set => {
    return (
      <section className="flexed">
        {set.map((aSet, index) => (
          <ShowSet
            key={aSet.id}
            imgSrc={aSet.imgSrc}
            logoSrc={storeLogo}
            buttonName={aSet.buttonName}
            index={index}
            summary={aSet.summary}
            findOutMore={aSet.findOutMore}
          />
        ))}
      </section>
    );
  };
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
      <main>
        {renderSet(stores)}
        <div className="flexed within-container about ">
          <img src={about} style={{ width: "50%", margin: "50px 10px" }}></img>
          <p>lol</p>
        </div>
        {renderSet(news)}
      </main>
    </div>
  );
}

export default App;

//
//  "https://www9.0zz0.com/2020/03/27/16/916075936.png"
//  "https://www9.0zz0.com/2020/03/27/16/368053602.png"
//  "https://www9.0zz0.com/2020/03/27/16/563186283.png"
//     "https://www9.0zz0.com/2020/03/27/16/887292467.png"
//     "https://www9.0zz0.com/2020/03/27/16/391678468.png"
//
