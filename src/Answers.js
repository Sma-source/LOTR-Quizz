import React, { useContext } from "react";
import { useGlobalContext } from "./context/GlobalState";
import Button from "react-bootstrap/Button";

const Answers = () => {
  const { quizz, currentQuestion, handleAnswerClick } = useGlobalContext();
  return (
    <>
      <div className="test text-center">
        {quizz[currentQuestion].answerOptions.map((answer, index) => {
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
