import React from "react";
import Card from "../Card/Card";
import {
  cardSuite,
  cardRank,
  standardCardDeckGenerator,
} from "../../data/data";

const CardDeck = () => {
  //   let currentDeck = [];
  let standardDeck = standardCardDeckGenerator(cardSuite, cardRank);

  //Durstenfeld / Knuth Shuffling Algo
  const shuffle = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    console.log(cards);
  };

  console.log("shuffle: ", shuffle(standardDeck));

  return (
    <div className="card-deck-wrapper">
      <Card />
      {standardDeck.map((el) => (
        <li key={el.toString()}>{el}</li>
      ))}
      {/* {standardCardDeckGenerator} */}
    </div>
  );
};

export default CardDeck;
