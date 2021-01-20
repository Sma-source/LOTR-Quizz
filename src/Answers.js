import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import Button from "react-bootstrap/Button";

const Answers = ({ currentQuestion, handleAnswerClick }) => {
  const { Questionnaire } = useContext(GlobalContext);
  return (
    <>
      <div className="test text-center">
        {Questionnaire[currentQuestion].answerOptions.map((answer, index) => {
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
