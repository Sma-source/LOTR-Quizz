import React from "react";

const Question = ({ data, currentQuestion }) => {
  return (
    <>
      <div className="text-center pt-3">
        <div className="question-count pb-3">
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
