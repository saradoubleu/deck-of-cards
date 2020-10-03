import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button/Button";
import CardDeck from "./CardDeck/CardDeck";
import "../i18n";
import { cardSuite, cardRank, standardCardDeckGenerator } from "../data/data";

const App = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [index, setIndex] = useState(0);

  const standardDeckOfCards = standardCardDeckGenerator(cardSuite, cardRank);

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  //based on Durstenfeld/Knuth Shuffling Algorithm
  const shuffle = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  const dealOneCard = () => {
    let randomizedDeck = [];
    shuffle(standardDeckOfCards);
    setIndex((prev) => (prev + 1) % standardDeckOfCards.length);
    randomizedDeck = currentDeck.concat(standardDeckOfCards[index]);
    setCurrentDeck(randomizedDeck);
    // console.log(currentDeck.length);
  };

  const renderCard = () => {
    setShow(true);
    dealOneCard();
  };

  return (
    <div className="App">
      <div>
        <nav>
          <span className="nav-item-1" onClick={() => toggleLanguage("en")}>
            {t("english")}
          </span>{" "}
          |{" "}
          <span className="nav-item-2" onClick={() => toggleLanguage("fr")}>
            {t("french")}
          </span>
        </nav>
        <h1>{t("title")}</h1>
        <p> {t("description")} </p>
        <Button onClick={() => renderCard()} label="deal" />{" "}
      </div>
      {show ? <CardDeck currentDeck={currentDeck} index={index} /> : null}
    </div>
  );
};

export default App;
