import React from "react";

const Question = ({ data, currentQuestion }) => {
  return (
    <>
      <div className="text-center pt-3">
        <div className="question-img">
          <img
            className="img-fluid rounded"
            width="500"
            src={data[currentQuestion].img}
            alt=""
          />
        </div>
        <div className="question-count">
          <span className="text-white">Question {currentQuestion + 1}</span>
        </div>
        <div className="questions-wrapper">
          <h2 className="questions">{data[currentQuestion].questionText} ?</h2>
        </div>
      </div>
    </>
  );
};

export default Question;
