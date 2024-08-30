import React from "react";
import BoxButton from "./BoxButton";

const Buttons = ({ buttonValues, zeroIndex }) => {
  return (
    <div className="buttons">
      {buttonValues.map((item, index) => (
        <BoxButton key={index} text={index === zeroIndex ? 0 : item} />
      ))}
    </div>
  );
};

export default Buttons;
