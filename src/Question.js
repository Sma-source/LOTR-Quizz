import React from "react";
import data from "./data";

const Question = ({ currentQuestion }) => {
  return (
    <>
      <div className=" section question-section">
        <div className="question-count">
          <span>
            Question {currentQuestion + 1} /{data.length}{" "}
          </span>
        </div>
        <div className="question-img">
          <img width="400" src={data[currentQuestion].img} alt="" />
        </div>
        <div className="question-text">
          <h4>{data[currentQuestion].questionText}</h4>
        </div>
      </div>
    </>
  );
};

export default Question;
