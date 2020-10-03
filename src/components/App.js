import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button/Button";
import CardDeck from "./CardDeck/CardDeck";
import "../i18n";
import { cardSuite, cardRank } from "../data/data";
import { standardCardDeckGenerator, shuffle } from "../helpers/cardGeneration";

const App = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [currentDeck, setCurrentDeck] = useState([]);
  const [index, setIndex] = useState(0);

  const toggleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const standardDeckOfCards = standardCardDeckGenerator(cardSuite, cardRank);

  let uniqueArray = [...new Set(standardDeckOfCards)];
  console.log(uniqueArray);
  const dealOneCard = () => {
    let randomizedDeck = [];
    setShow(true);
    setIndex((prev) => (prev + 1) % standardDeckOfCards.length);
    randomizedDeck = currentDeck.concat(standardDeckOfCards[index]);
    // console.log(standardDeckOfCards);
    setCurrentDeck(randomizedDeck);
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
        <Button onClick={() => dealOneCard()} label="deal" />{" "}
      </div>
      {show ? <CardDeck currentDeck={currentDeck} index={index} /> : null}
    </div>
  );
};

export default App;
