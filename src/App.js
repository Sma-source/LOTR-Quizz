import React, { useState } from "react";
import "./index.css";
import data from "./data";
import Question from "./Question";
import Answers from "./Answers";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

function App() {
  const [allData, setAllData] = useState(data);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < allData.length) {
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
              You Score {score} out of {allData.length}
            </h1>
            <Button size="lg" onClick={refreshPage}>
              Try Again!
            </Button>
          </Jumbotron>
        </Container>
      ) : (
        <>
          <div className="container">
            <div className="section title">
              <h1>LOTR quizz</h1>
            </div>
            <Question currentQuestion={currentQuestion} />
            <Answers
              currentQuestion={currentQuestion}
              handleAnswerClick={handleAnswerClick}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
