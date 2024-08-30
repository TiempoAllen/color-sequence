import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const BoxButton = ({ text }) => {
  return (
    <div>
      <Box
        sx={{
          width: 130,
          height: 70,
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "gray",
            opacity: [0.9, 0.8, 0.7],
          },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          m: 0,
          borderRadius: 2,
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </div>
  );
};

export default BoxButton;
