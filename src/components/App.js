import React, { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";
import Numbers from "./Numbers";
import { Button } from "@mui/material";

const App = () => {
  const originalValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const initialCounterValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [buttonValues, setButtonValues] = useState(originalValues);
  const randomZeroIndexRef = useRef(-1);
  const [counter, setCounter] = useState(initialCounterValues);
  const [isRolling, setIsRolling] = useState(false);

  const startRoll = () => {
    if (isRolling) return;

    setIsRolling(true);

    let interval;

    interval = setInterval(() => {
      const newButtonValues = originalValues.map((value, index) =>
        index === randomIndex ? 0 : Math.floor(Math.random() * 9) + 1
      );

      setButtonValues(newButtonValues);
      randomZeroIndexRef.current = randomIndex;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setButtonValues(originalValues);

      if (randomZeroIndexRef.current !== -1) {
        const updatedValues = [...originalValues];
        updatedValues[randomZeroIndexRef.current] = 0;
        setButtonValues(updatedValues);
      }

      randomZeroIndexRef.current = -1;
      setIsRolling(false);

      setCounter((prevCounter) => {
        const updatedCounter = [...prevCounter];
        updatedCounter[randomIndex]++;
        return updatedCounter;
      });
    }, 1000);
  };

  const randomIndex = Math.floor(Math.random() * buttonValues.length);

  useEffect(() => {
    // Reset button values when component unmounts
    return () => {
      // No need to clear the interval here
      setButtonValues(originalValues);
    };
  }, []);

  return (
    <div className="container">
      <Numbers zero={randomIndex} counter={counter} />
      <Buttons buttonValues={buttonValues} />
      <Button
        sx={{
          m: 3,
        }}
        variant="contained"
        onClick={startRoll}
        disabled={isRolling}
      >
        Start Roll
      </Button>
    </div>
  );
};

export default App;
