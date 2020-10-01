import React from "react";
import Card from "../Card/Card";

const CardDeck = (props) => {
  const handleClick = (event) => {
    event.preventDefalt();
  };

  return (
    <div className="card-deck-wrapper">
      {/* Hello{" "} */}
      <Card onClick={(e) => this.handleClick(e)}>
        {props.cards.map((el) => el)}
      </Card>
    </div>
  );
};

export default CardDeck;
