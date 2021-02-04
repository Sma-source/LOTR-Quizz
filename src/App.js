import React from "react";
import "./index.css";
import Question from "./Question";
import Answers from "./Answers";
import Gameover from "./Gameover";
import Alert from "./Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Levels from "./Levels";
import { useGlobalContext } from "./context/GlobalState";
function App() {
  const {
    score,
    showScore,
    quizz,
    start,
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
