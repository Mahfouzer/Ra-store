import React from "react";
import HeaderImg from "../../src/assets/images/header.jpg";
import scrollImg from "../../src/assets/images/scroll.png";

export default function Header({ children, whoWeAre, headline, scroller }) {
  return (
    <header className="heading">
      {children}
      <div className="heading__content  heading__content--blended text-container ">
        <h2 className="heading__content__headline">{headline}</h2>
      </div>
      <div className="heading__content text-container">
        <p className="heading__content__who-we-are">{whoWeAre}</p>
      </div>
      {scroller && (
        <div className="heading__scroller text-container">
          <div className="heading__scroller__img">
            <span></span>
            <img src={scrollImg} alt="" />
          </div>
        </div>
      )}
      <img className="heading__image" src={HeaderImg}></img>
    </header>
  );
}
