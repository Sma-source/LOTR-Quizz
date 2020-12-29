import React, { useState } from "react";
import "./index.css";
import data from "./data";
import Question from "./Question";
import Answers from "./Answers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="App">
      {showScore ? (
        <Container className="p-3">
          <Jumbotron className="text-center">
            <h1 className="header">
              Your Score <br></br>
              {score}/{data.length}
            </h1>
            <Button size="lg" onClick={refreshPage}>
              Try again
            </Button>
          </Jumbotron>
        </Container>
      ) : (
        <>
          <Container>
            <Row>
              <div className="col-md-8 offset-md-2">
                <Question currentQuestion={currentQuestion} />

                <Answers
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
