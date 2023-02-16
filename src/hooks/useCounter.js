import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = (prev) => {
    if (prev > 0) {
      return (prev) => prev - 0;
    }
    return prev;
  };

  return {
    count,
    increment,
    decrement,
  };
};
