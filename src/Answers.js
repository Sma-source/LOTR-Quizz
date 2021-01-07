import React from "react";

import Button from "react-bootstrap/Button";

const Answers = ({ data, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="container text-center">
        {data[currentQuestion].answerOptions.map((answer, index) => {
          return (
            <Button
              size="lg"
              className="btn-secondary m-1 pt-3 pr-5 pl-5 pb-3"
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
