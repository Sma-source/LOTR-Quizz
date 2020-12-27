import React from "react";
import data from "./data";
import Button from "react-bootstrap/Button";

const Answers = ({ currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className=" section answer-section">
        {data[currentQuestion].answerOptions.map((answer, index) => {
          return (
            <Button
              size="lg"
              className="m-2"
              onClick={() => handleAnswerClick(answer.isCorrect)}
              key={index}
            >
              {answer.answerText}{" "}
            </Button>
          );
        })}
      </div>
    </>
  );
};

export default Answers;
