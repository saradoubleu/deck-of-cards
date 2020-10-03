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
            console.log(currentDeck.length);
            return <Card key={el.toString()} value={el} />;
          }
        })}
      </span>
    </div>
  ) : null;

  return <div className="card-deck-wrapper">{listOfDealtCards}</div>;
};

export default CardDeck;
