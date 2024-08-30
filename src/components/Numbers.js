import React from "react";
import BoxSequence from "./BoxSequence";

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Numbers = ({ counter }) => {
  return (
    <>
      <div className="box-sequence">
        {numbers.map((item, index) => (
          <BoxSequence key={index} text={item} />
        ))}
      </div>
      <div className="box-sequence">
        {counter.map((item, index) => (
          <BoxSequence
            key={index}
            color="white"
            borderColor="black"
            text={`${item}${index < counter.length - 1 ? " " : ""}`}
          />
        ))}
      </div>
    </>
  );
};

export default Numbers;
