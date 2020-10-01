import React from "react";
import Card from "../Card/Card";

const CardDeck = () => {
  let renderedCard = <Card />;
  return <div className="card-deck-wrapper">{renderedCard}</div>;
};

export default CardDeck;
