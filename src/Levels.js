import React from "react";
import Button from "react-bootstrap/Button";
const Levels = ({ levels, filterQuizz }) => {
  return (
    <>
      <div className="container">
        {levels.map((level, index) => {
          return (
            <Button
              size="md"
              className="m-1"
              key={index}
              onClick={() => filterQuizz(level)}
            >
              {level}
            </Button>
          );
        })}
      </div>
    </>
  );
};
export default Levels;
