import React from "react";
import "./index.css";
import Question from "./Question";
import Answers from "./Answers";
import Gameover from "./Gameover";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Levels from "./Levels";
import { useGlobalContext } from "./context/GlobalState";
function App() {
  const { showScore, start } = useGlobalContext();

  // const showAlert = (show = false, type = "", msg = "") => {
  //   setAlert({ show, type, msg });
  // };

  return (
    <div className="App">
      {start ? (
        <Levels />
      ) : showScore ? (
        <Gameover />
      ) : (
        <>
          <Container>
            <Row>
              <div className="col-md-8 offset-md-2">
                <Question />

                <Answers />
              </div>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default App;
