"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const PraiseSelector = () => {
  const [praise, setPraise] = useState(null);
  return (
    <div className="flex gap-6 p-5">
      <p
        className={twMerge(
          "bg-gray-200 p-2 px-3 rounded-3xl cursor-pointer",
          praise === 1 && "bg-green-400"
        )}
        onClick={() => setPraise(1)}
      >
        Adventurous
      </p>
      <p
        className={twMerge(
          "bg-gray-200 p-2 px-3 rounded-3xl cursor-pointer",
          praise === 2 && "bg-green-400"
        )}
        onClick={() => setPraise(2)}
      >
        Clean
      </p>
      <p
        className={twMerge(
          "bg-gray-200 p-2 px-3 rounded-3xl cursor-pointer",
          praise === 3 && "bg-green-400"
        )}
        onClick={() => setPraise(3)}
      >
        Good Listener
      </p>
    </div>
  );
};

export default PraiseSelector;
