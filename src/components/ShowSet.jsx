import React from "react";

export default function ShowSet({
  imgSrc,
  logoSrc,
  buttonName,
  summary,
  findOutMore,
  index
}) {
  window.summary = summary;
  return (
    <section className={`showSet ${findOutMore ? "" : "showSet--themed"}`}>
      <div
        className={`flexed ${
          index === 2 || index === 1 ? "flexed--reversed" : ""
        }`}
      >
        <img src={imgSrc} alt={summary[0]} className={`showSet__img`} />
        <div
          className={`showSet__text ${
            index === 1 || index === 2 ? "showSet__text--reversed" : ""
          }`}
        >
          {findOutMore && <img src={logoSrc} alt="store logo" />}
          {summary.map((summaryItem, i) => (
            <p
              className={
                summary.length > 1 && i === 0 && "showSet__text__headline"
              }
            >
              {summaryItem}
            </p>
          ))}
          <div>
            <button>{buttonName}</button> {findOutMore && <a>our story</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
