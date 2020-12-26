import React, { useState } from "react";
import "./App.css";
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
  return (
    <div className="App">
      <h1>LOTR Quizz app</h1>

      {showScore ? (
        <div className="score-section">
          You {score} out of {data.length}
        </div>
      ) : (
        <>
          <span>Score : {score}</span>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1} </span>/{data.length}
            </div>
            <div className="question-text">
              {data[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
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
        </>
      )}
    </div>
  );
}

export default App;
