import React, { Component } from "react";

//Styles
import "./styles/index.scss";

//Components
import Header from "./components/Header";
import ShowSet from "./components/ShowSet";
import Navigation from "./components/Navigation";
import SectionIntro from "./components/SectionIntro";
import About from "./components/About";
import StoreMap from "./components/StoreMap";
import Carousel from "./components/Carousel";

//images
import Logo from "./assets/images/logo.png";
import CartImg from "./assets/images/cart.png";
import shopImg from "./assets/images/shop.png";
import paystoreImg from "./assets/images/paystore.png";
import storeLogo from "./assets/images/storelogo.png";
import about from "./assets/images/about.png";

//mock data
import stores from "./mockData/store.json";
import news from "./mockData/news.json";
import products from "./mockData/products.json";

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
      {/* Header and Navigation */}
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
        {/* Stores section */}
        <SectionIntro name="stores">
          <h3 className="heading">LET'S SHOPPING BY BRAND</h3>
          <p>Browse our sites now and buy what you want in a shared basket</p>
        </SectionIntro>
        {renderSet(stores)}

        {/* About Section */}
        <About aboutimg={about} />

        {/* Maps section */}
        <SectionIntro name="Maps" centered>
          <h3 className="heading">
            GO TO STORE FROM <span className="primary-colored">YOUR HOME</span>
          </h3>
          <form>
            <div>
              <select>
                <option value="0"> Levis </option>
              </select>
            </div>
            <div>
              <select>
                <option value="0"> Cairo </option>
              </select>
            </div>
            <div>
              <select>
                <option value="0"> Tahrir</option>
              </select>
            </div>
          </form>
        </SectionIntro>
        {/* <StoreMap imgSrc={storeLogo} /> */}

        {/* Products section */}
        <SectionIntro name="products">
          <h3 className="heading">BEST SELLER PRODUCTS</h3>
          <p>Browse our sites now and buy what you want in a shared basket</p>
        </SectionIntro>
        <Carousel>
          {products.map(product => (
            <div className="product" key={product.id}>
              <img src={product.img}></img>
              <img src={storeLogo} className="logo"></img>
              <p className="product__name">{product.itemName}</p>
              <p className="product__type">{product.itemType}</p>
              <p className="product__price">{product.price}</p>
            </div>
          ))}
        </Carousel>

        {/* Steps section */}
        <SectionIntro name="steps">
          <h3 className="heading">HOW IT WORKS?</h3>
          <p>Browse our sites now and buy what you want in a shared basket</p>
        </SectionIntro>
        <div className="flexed within-container flexed--equaly-spaced">
          <div className="step">
            <img src={shopImg}></img>
            <p>step. 1</p>
            <p>Open any brand website</p>
          </div>
          <div className="step">
            <img src={CartImg}></img>
            <p>step. 2</p>
            <p>Add products to your cart</p>
          </div>
          <div className="step">
            <img src={paystoreImg}></img>
            <p>step. 3</p>
            <p>Pay and get your product</p>
          </div>
        </div>

        {/* NEWS section */}
        {renderSet(news)}
      </main>

      <footer>
        <SectionIntro centered>
          <h3 className="heading">SUBSCRIBE TO RA SPORT NEWSLETTER</h3>
          <form>
            <div className="email-container">
              <input placeholder="Your email address" type="email"></input>
            </div>
          </form>
          <h3 className="heading">Choose your favorite brand</h3>
          <p>
            RaSport company for import & export SAE, is a leading Egyptian
            retail company, franchising and managing some of the best
            international brands, making them grow in the region.
          </p>
          <h3 className="heading">Payment methods</h3>

          <img
            src={Logo}
            style={{ width: "30%", margin: "20px auto", display: "block" }}
          ></img>
          <p>Copyright © 2020 RA SPORT. All rights reserved.</p>
        </SectionIntro>
      </footer>
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
