import React from "react";
import { useGlobalContext } from "./context/GlobalState";
const Gameover = () => {
  const { quizz, score, handleStart, handleTryAgain } = useGlobalContext();
  return <></>;
};

export default Gameover;
