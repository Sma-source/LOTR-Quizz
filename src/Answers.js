import React from "react";
import data from "./data";

const Answers = ({ currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className=" section answer-section">
        {data[currentQuestion].answerOptions.map((answer, index) => {
          return (
            <button
              onClick={() => handleAnswerClick(answer.isCorrect)}
              key={index}
            >
              {answer.answerText}{" "}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Answers;
