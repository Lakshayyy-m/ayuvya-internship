"use client";
import { Rating } from "@mui/material";
import React, { useState } from "react";

const StarRating = () => {
  const [value, setValue] = useState();

  return (
    <div className="h-8 ">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        size="large"
        className="text-5xl"
      />
    </div>
  );
};

export default StarRating;
