import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="App">
      <h1>LOTR Quizz app</h1>

      {false ? (
        <div className="score-section">You scored 1 out of {data.length}</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{data.length}
            </div>
            <div className="question-text">{data[0].questionText}</div>
          </div>
          <div className="answer-section">
            {data[0].answerOptions.map((answer, index) => {
              return <button key={index}>{answer.answerText} </button>;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
