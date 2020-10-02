import React from "react";

const Card = (props) => {
  const { value } = props;
  let suiteSymbol = value ? value.split(" ")[0] : null;
  let rankSymbol = value ? value.split(" ")[1].toUpperCase() : null;

  const switchSymbol = (suiteSymbol) => {
    switch (suiteSymbol) {
      case "hearts":
        return "♥";
      case "diamonds":
        return "♦";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      default:
        return "???";
    }
  };

  return (
    <div
      className="card-wrapper"
      style={
        suiteSymbol === "hearts" || suiteSymbol === "diamonds"
          ? { color: "red" }
          : {}
      }
    >
      <span className="suite-symbol-1">{switchSymbol(suiteSymbol)}</span>
      <span>
        <div className="rank-symbol">{rankSymbol.charAt()}</div>
      </span>
      <span className="suite-symbol-2">{switchSymbol(suiteSymbol)}</span>
    </div>
  );
};

export default Card;
