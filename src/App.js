import React from "react";
import "./index.css";

import Question from "./Question";
import Answers from "./Answers";
import Alert from "./Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Levels from "./Levels";
import { useGlobalContext } from "./context/GlobalState";
function App() {
  const {
    score,
    showScore,
    quizz,
    start,
    filterQuizz,
    handleTryAgain,
    handleStart,
  } = useGlobalContext();
  // const { Questionnaire } = useContext(GlobalContext);
  // const [quizz, setQuizz] = useState(Questionnaire);

  // const [start, setStart] = useState(true);

  // const [currentQuestion, setCurrentQuestion] = useState(0);

  // const [showScore, setShowScore] = useState(false);

  // const [score, setScore] = useState(0);

  // const [alert, setAlert] = useState({
  //   show: false,
  //   msg: "",
  //   type: "",
  // });
  // const filterQuizz = (difficulties) => {
  //   const newQuizz = Questionnaire.filter(
  //     (datas) => datas.difficulties === difficulties
  //   );
  //   setQuizz(newQuizz);
  //   setStart(false);
  // };
  // const handleAnswerClick = (isCorrect) => {
  //   if (isCorrect) {
  //     setScore(score + 1);
  //   }
  //   const nextQuestion = currentQuestion + 1;
  //   if (nextQuestion < quizz.length) {
  //     setCurrentQuestion(nextQuestion);
  //   } else {
  //     setShowScore(true);
  //   }
  // };

  // const handleTryAgain = () => {
  //   setShowScore(false);
  //   setCurrentQuestion(0);
  //   setScore(0);
  // };

  // const showAlert = (show = false, type = "", msg = "") => {
  //   setAlert({ show, type, msg });
  // };

  // const handleStart = () => {
  //   setStart(true);
  //   handleTryAgain();
  // };

  return (
    <div className="App">
      {start ? (
        <Levels filterQuizz={filterQuizz} />
      ) : showScore ? (
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
            <Button
              className="btn-brown"
              size="lg m-2"
              onClick={handleTryAgain}
            >
              Try again
            </Button>
          </Jumbotron>
        </Container>
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
