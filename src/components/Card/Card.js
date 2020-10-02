import React from "react";

const Card = (props) => {
  const { deck, currentDeck, value } = props;

  return (
    <div className="card-wrapper">
      <div
        style={{
          width: "10%",
          height: "100px",
          border: "solid",
          padding: "1%",
          margin: "5%",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Card;
