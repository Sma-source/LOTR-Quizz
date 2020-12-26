import React, { useState } from "react";
import "./index.css";
import data from "./data";
import Question from "./Question";

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
        <div className=" section score-section">
          You {score} out of {allData.length}
          <button onClick={refreshPage}>Try Again!</button>
        </div>
      ) : (
        <>
          <div className="container">
            <div className="section title">
              <h1>LOTR quizz</h1>
            </div>
            <Question currentQuestion={currentQuestion} />
            <div className=" section answer-section">
              {allData[currentQuestion].answerOptions.map((answer, index) => {
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
