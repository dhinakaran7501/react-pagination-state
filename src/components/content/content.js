import React, { useState } from "react";
import "./content.css";

const Content = () => {
  const quotesArray = [
    "The purpose of our lives is to be happy.",
    "Turn your wounds into wisdom.",
    "Get busy living or get busy dying.",
  ];

  let [quote, setquote] = useState(1);
  let [isvisible, setIsVisible] = useState(true);

  function visible() {
    setIsVisible(isvisible ? false : true);
  }

  const handlePrevious = () => {
    if (quote > 1) {
      setquote(quote - 1);
    }
  };
  const handleNext = () => {
    if (quote < quotesArray.length) {
      setquote(quote + 1);
    }
  };
  return (
    <div className="container">
      <div className="mark">
        <button onClick={visible}>&times;</button>
      </div>
      {isvisible ? (
        <div className="content-section">
          <div className="border">
            <div className="number-section">
              <button className={quote >= 1 ? "active" : ""}>1</button>
              <button className={quote >= 2 ? "active" : ""}>2</button>
              <button className={quote >= 3 ? "active" : ""}>3</button>
            </div>
            <div className="message-section">
              <i>
                <b>Quote {quote} :</b>
              </i>
              <h3>{quotesArray[quote - 1]}</h3>
            </div>
            <div className="button-section">
              <button onClick={handlePrevious}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
