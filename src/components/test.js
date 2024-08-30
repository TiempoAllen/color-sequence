import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import ColorSequence from "./ColorSequence";
import sequence from "../sequence";
import { Button } from "@mui/material";

function App() {
  const originalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [buttonValues, setButtonValues] = useState(originalValues);
  const randomZeroIndexRef = useRef(-1); // Use useRef for the random zero index

  const startRoll = () => {
    // Generate a random index to set to zero
    const randomIndex = Math.floor(Math.random() * buttonValues.length);

    // Generate random values for buttons (except for the one set to zero)
    const newButtonValues = originalValues.map((value, index) =>
      index === randomIndex ? 0 : Math.floor(Math.random() * 9) + 1
    );

    // Update the button values and set the random zero index using useRef
    setButtonValues(newButtonValues);
    randomZeroIndexRef.current = randomIndex;

    // After a second, reset the values with the zero in a random position
    setTimeout(() => {
      // Reset the button values to their original values
      setButtonValues(originalValues);

      // If a random zero index was set, insert zero at that index using the ref
      if (randomZeroIndexRef.current !== -1) {
        const updatedValues = [...originalValues];
        updatedValues[randomZeroIndexRef.current] = 0;
        setButtonValues(updatedValues);
      }

      // Reset the random zero index using the ref
      randomZeroIndexRef.current = -1;
    }, 1000);
  };
  return (
    <div className="container">
      <ColorSequence />
      <Buttons buttonValues={buttonValues} />
      <Button
        sx={{
          m: 3,
        }}
        variant="contained"
        onClick={startRoll}
      >
        Start Roll
      </Button>
    </div>
  );
}

export default App;
