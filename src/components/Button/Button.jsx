import React from "react";

const Button = ({ clickHandler, text = "Add default value" }) => {
  return (
    <button className="button" onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
