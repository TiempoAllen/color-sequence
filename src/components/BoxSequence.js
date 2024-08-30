import React from "react";
import { Box, Typography } from "@mui/material";

const BoxSequence = ({ text }) => {
  return (
    <div>
      <Box
        sx={{
          width: 30,
          height: 30,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          m: 0,
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </div>
  );
};

export default BoxSequence;
