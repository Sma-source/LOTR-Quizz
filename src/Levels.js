import React from "react";
import { useGlobalContext } from "./context/GlobalState";
import Button from "react-bootstrap/Button";
import FrodonSvg from "./FrodonSvg";
import LegolasSvg from "./LegolasSvg";
import GandalfSvg from "./GandalfSvg";
const Levels = () => {
  const { filterQuizz } = useGlobalContext();
  // const allLevels = [...new Set(quizz.map((datas) => datas.difficulties))];
  // const [levels, setLevels] = useState(allLevels);
  return (
    <section className="full">
      <div className="box container text-center">
        <small className="text-dark font-weight-bold">Quizz</small>
        <h1 className="mt-2">
          <span className="text-brown display-4 font-weight-bold"> The</span>{" "}
          <br />
          <span className="text-dark display-2 font-weight-bold">
            {" "}
            Lord
          </span>{" "}
          <br />
          <span className="text-brown display-4 font-weight-bold">
            of The
          </span>{" "}
          <br />
          <span className="text-dark display-2 font-weight-bold">
            {" "}
            Rings
          </span>{" "}
          <br />
        </h1>
        <img
          src="https://icon-library.com/images/lord-of-the-rings-icon/lord-of-the-rings-icon-19.jpg"
          width="100"
          alt="ring"
          className="img-fluid mt-1"
        />
        <h3 className="mt-4 mb-3">Select a level to Start The Quizz</h3>
        {/* {levels.map((level, index) => {
          return (
            <Button
              size="lg"
              className="btn-level btn btn-secondary m-1"
              key={index}
              onClick={() => filterQuizz(level)}
            >
              {level}
            </Button>
          );
        })} */}
        <Button
          size="lg"
          className="btn-level btn btn-secondary m-1"
          onClick={() => filterQuizz("Easy")}
        >
          <FrodonSvg width="40" />
        </Button>

        <Button
          size="lg"
          className="btn-level btn btn-secondary m-1"
          onClick={() => filterQuizz("Medium")}
        >
          <LegolasSvg width="40" />
        </Button>

        <Button
          size="lg"
          className="btn-level btn btn-secondary m-1"
          onClick={() => filterQuizz("Hard")}
        >
          <GandalfSvg width="40" />
        </Button>
      </div>
    </section>
  );
};
export default Levels;
