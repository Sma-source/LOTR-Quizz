import React, { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
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
            <button>Answer 1</button>
            <button>Answer 2</button>
            <button>Answer 3</button>
            <button>Answer 4</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
