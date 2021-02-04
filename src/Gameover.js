import React from "react";
import { useGlobalContext } from "./context/GlobalState";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
const Gameover = () => {
  const { quizz, score, handleStart, handleTryAgain } = useGlobalContext();
  return (
    <>
      <Container className="p-3 d-flex align-items-center min-vh-100">
        <Jumbotron className="score text-center mx-auto">
          <h1 className="header mb-5 display-1">
            Your Score <br></br>
            {score}/{quizz.length}
          </h1>
          {/* {alert.show && <Alert {...alert} />} */}

          <Button variant="secondary" size="lg" onClick={handleStart}>
            Try another Level
          </Button>
          <Button className="btn-brown" size="lg m-2" onClick={handleTryAgain}>
            Try again
          </Button>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Gameover;
