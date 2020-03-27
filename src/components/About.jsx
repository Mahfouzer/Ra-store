import React from "react";

export default function About({ aboutimg }) {
  return (
    <section className="flexed within-container about">
      <img src={aboutimg} className="about__img"></img>
      <div className="about__text">
        <h3 className="about__text__headline">
          <span className="primary-colored">WE ARE</span> MORE THAN A BUSINESS
        </h3>
        <p>
          We are more than a business, we are an en extended family of young,
          open minded,ambitious and always enthusiastic experts with various
          background.We are more than a business,we are an en extended family of
          young, open minded, ambitious and always enthusiastic experts with
          various background.
        </p>
        <a>Learn more &rarr;</a>
      </div>
    </section>
  );
}
