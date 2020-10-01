import React from "react";
import Button from "./Button/Button";
import CardDeck from "./CardDeck/CardDeck";
import { deckOfCards, values } from "../data/data";

const App = () => {
  const renderCard = () => {
    console.log("Deck: ", deckOfCards);
  };

  return (
    <div className="App">
      <h1>Playing Field</h1>
      <CardDeck />
      <Button onClick={renderCard} />{" "}
    </div>
  );
};

export default App;
