import React from "react";

import Button from "react-bootstrap/Button";

const Answers = ({ data, currentQuestion, handleAnswerClick }) => {
  return (
    <>
      <div className="test text-center">
        {data[currentQuestion].answerOptions.map((answer, index) => {
          return (
            <div className="answer" key={index}>
              <Button
                variant=""
                type="button"
                className="btn-answer"
                size="lg"
                onClick={() => handleAnswerClick(answer.isCorrect)}
              >
                {answer.answerText}
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Answers;
