import React from "react";
import data from "./data";

const Question = ({ currentQuestion }) => {
  return (
    <>
      <div className="text-center">
        <div className="question-count">
          <span className="text-muted">
            Question {currentQuestion + 1} /{data.length}{" "}
          </span>
        </div>
        <div className="question-img">
          <img
            className="img-fluid rounded"
            width="400"
            src={data[currentQuestion].img}
            alt=""
          />
        </div>
        <div className="text-justify-center h5 pb-5 pt-3 font-weight-bold">
          <h4>{data[currentQuestion].questionText}</h4>
        </div>
      </div>
    </>
  );
};

export default Question;
