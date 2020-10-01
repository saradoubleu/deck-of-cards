import React, { useState } from "react";
import Button from "./Button/Button";
import CardDeck from "./CardDeck/CardDeck";
import { deckOfCards } from "../data/data";

const App = () => {
  const [cards, setCards] = useState([]);
  const [show, setShow] = useState(false);

  const renderCard = () => {
    console.log("Deck: ", deckOfCards);
    setShow(true);
  };

  return (
    <div className="App">
      <h1>Playing Field</h1>
      <Button onClick={renderCard} /> {show ? <CardDeck cards={cards} /> : null}
    </div>
  );
};

export default App;
