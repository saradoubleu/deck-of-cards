import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button/Button";
import CardDeck from "./CardDeck/CardDeck";
import "../i18n";

const App = () => {
  const { t, i18n } = useTranslation();

  const [show, setShow] = useState(false);

  const renderCard = () => {
    setShow(true);
  };

  const handleOnClick = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => handleOnClick("en")}>{t("english")}</button>
        <button onClick={() => handleOnClick("fr")}>{t("french")}</button>
      </nav>
      <h1>{t("title")}</h1>
      <Button onClick={renderCard} /> {show ? <CardDeck /> : null}
    </div>
  );
};

export default App;
