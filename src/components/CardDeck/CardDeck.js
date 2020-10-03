import React from "react";
import Card from "../Card/Card";

const CardDeck = (props) => {
  let { currentDeck } = props;

  let listOfDealtCards = currentDeck ? (
    <div style={{ padding: "3%" }}>
      {" "}
      <hr></hr>
      <span>
        {currentDeck.map((el) => {
          while (currentDeck.length < 52) {
            return <Card key={el.toString()} value={el} />;
          }
          return null;
        })}
      </span>
    </div>
  ) : null;

  return <div className="card-deck-wrapper">{listOfDealtCards}</div>;
};

export default CardDeck;
