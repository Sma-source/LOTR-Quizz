import React from "react";
import Button from "react-bootstrap/Button";
const Levels = ({ levels, filterQuizz }) => {
  return (
    <section className="full">
      <div className="box container text-center">
        <span className="text-dark font-weight-bold">Quizz</span>
        <h1 className="mt-4">
          <span className="text-light display-4 font-weight-bold"> The</span>{" "}
          <br />
          <span className="text-dark display-1 font-weight-bold">
            {" "}
            Lord
          </span>{" "}
          <br />
          <span className="text-light display-4 font-weight-bold">
            of The
          </span>{" "}
          <br />
          <span className="text-dark display-1 font-weight-bold">
            {" "}
            Rings
          </span>{" "}
          <br />
        </h1>
        <img
          src="https://icon-library.com/images/lord-of-the-rings-icon/lord-of-the-rings-icon-19.jpg"
          width="150"
          alt="ring"
          className="img-fluid mt-2"
        />
        <h3 className="mt-5 mb-5">Choose a level</h3>
        {levels.map((level, index) => {
          return (
            <Button
              size="lg"
              className="btn-level m-1"
              key={index}
              onClick={() => filterQuizz(level)}
            >
              {level}
            </Button>
          );
        })}
      </div>
    </section>
  );
};
export default Levels;
