import React, { useState } from "react";
import "./index.css";
import data from "./data";

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
        <div className=" section score-section">
          You {score} out of {data.length}
          <button onClick={refreshPage}>Try Again!</button>
        </div>
      ) : (
        <>
          <span className="score-live">Score : {score}</span>
          <div className="container">
            <div className=" section question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1} /{data.length}{" "}
                </span>
              </div>
              <div className="question-img">
                <img width="500" src={data[currentQuestion].img} alt="lotr" />
              </div>
              <div className="question-text">
                {data[currentQuestion].questionText}
              </div>
            </div>
            <div className=" section answer-section">
              {data[currentQuestion].answerOptions.map((answer, index) => {
                return (
                  <button
                    onClick={() => handleAnswerClick(answer.isCorrect)}
                    key={index}
                  >
                    {answer.answerText}{" "}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
