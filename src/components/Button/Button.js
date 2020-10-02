import React from "react";
import { useTranslation } from "react-i18next";

const Button = (props) => {
  const { label, onClick } = props;
  const { t } = useTranslation();

  return (
    <div className="button-wrapper">
      <button onClick={onClick}>{t(label)}</button>
    </div>
  );
};

export default Button;
