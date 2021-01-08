import React, { useState } from "react";
import "./index.css";
import data from "./data";
import Question from "./Question";
import Answers from "./Answers";
import Alert from "./Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Levels from "./Levels";

const allLevels = [...new Set(data.map((datas) => datas.difficulties))];
function App() {
  const [quizz, setQuizz] = useState(data);

  const [start, setStart] = useState(true);

  const [levels, setLevels] = useState(allLevels);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });
  const filterQuizz = (difficulties) => {
    const newQuizz = data.filter(
      (datas) => datas.difficulties === difficulties
    );
    setQuizz(newQuizz);
    setStart(false);
  };
  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTryAgain = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const handleStart = () => {
    setStart(true);
    handleTryAgain();
  };

  return (
    <div className="App">
      {start ? (
        <Levels levels={levels} filterQuizz={filterQuizz} />
      ) : showScore ? (
        <Container className="p-3 d-flex align-items-center min-vh-100">
          <Jumbotron className="score text-center mx-auto">
            <h1 className="header mb-5">
              Your Score <br></br>
              {score}/{quizz.length}
            </h1>
            {alert.show && <Alert {...alert} />}

            <Button variant="secondary" size="lg" onClick={handleStart}>
              Try another Level
            </Button>
            <Button
              className="btn-brown"
              size="lg m-2"
              onClick={handleTryAgain}
            >
              Try again
            </Button>
          </Jumbotron>
        </Container>
      ) : (
        <>
          <Container>
            <Row>
              <div className="col-md-8 offset-md-2">
                <Question data={quizz} currentQuestion={currentQuestion} />

                <Answers
                  data={quizz}
                  currentQuestion={currentQuestion}
                  handleAnswerClick={handleAnswerClick}
                />
              </div>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
