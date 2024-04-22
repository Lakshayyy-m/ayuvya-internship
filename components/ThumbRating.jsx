"use client";
import Image from "next/image";
import React, { useState } from "react";

const ThumbRating = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="flex gap-9 p-4">
      <div className="flex gap-4 items-center " onClick={() => setValue(0)}>
        <Image
          src={`/images/thumbsDown${value === 1 ? "Empty" : "Filled"}.svg`}
          height={36}
          width={36}
          alt="thumbsDown"
          className="cursor-pointer hover:scale-105 "
        />
        No
      </div>
      <div className="flex gap-4 items-center" onClick={() => setValue(1)}>
        <Image
          src={`/images/thumbsUp${value === 0 ? "Empty" : "Filled"}.svg`}
          height={36}
          width={36}
          alt="thumbsDown"
          className="cursor-pointer hover:scale-105"
        />
        Yes
      </div>
    </div>
  );
};

export default ThumbRating;
