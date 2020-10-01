import React from "react";

const Button = (props) => {
  return (
    <div className="button-wrapper">
      <button onClick={props.onClick}>Deal</button>
    </div>
  );
};

export default Button;
