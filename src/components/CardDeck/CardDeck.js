import React from "react";
import Card from "../Card/Card";

const CardDeck = (props) => {
  let { currentDeck } = props;

  let listOfDealtCards = currentDeck ? (
    <div>
      {" "}
      <ul>
        {currentDeck.map((el) => (
          <Card key={el.toString()} value={el} />
        ))}
      </ul>
    </div>
  ) : null;

  return <div className="card-deck-wrapper">{listOfDealtCards}</div>;
};

export default CardDeck;
