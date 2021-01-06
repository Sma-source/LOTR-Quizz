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

const allLevels = [...new Set(data.map((datas) => datas.difficulties))];
function App() {
  const [quizz, setQuizz] = useState(data);

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

      if (score >= 4) {
        showAlert(true, "success", "Whaou congrats!!!");
      } else if (score < 2) {
        showAlert(true, "danger", "Very Bad!!");
      }
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
  return (
    <div className="App">
      {showScore ? (
        <Container className="p-3">
          <Jumbotron className="text-center bg-white">
            <h1 className="header">
              Your Score <br></br>
              {score}/{quizz.length}
            </h1>
            {alert.show && <Alert {...alert} />}
            <Button size="lg" onClick={handleTryAgain}>
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
