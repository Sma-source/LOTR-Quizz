import React, { useState, useContext } from "react";
// import AppReducer from "./AppReducer";

// Init State

const initialState = [
  {
    questionText: "Who is Bilbo Baggins for Frodo ?",
    img:
      "http://images4.fanpop.com/image/photos/18200000/Bilbo-Baggins-sir-ian-holm-18256983-320-240.gif",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "His father", isCorrect: false },
      { answerText: "His cousin", isCorrect: false },
      { answerText: "His uncle", isCorrect: true },
      { answerText: "His grandfather", isCorrect: false },
    ],
  },
  {
    questionText: "Which metal is the armoured shirt of Frodo made out of?",
    img:
      "https://i.pinimg.com/originals/af/5d/b4/af5db4a29a6e947d540b90732f5819a5.jpg",
    difficulties: "Frodo",

    answerOptions: [
      { answerText: "Silver", isCorrect: false },
      { answerText: "Mithril", isCorrect: true },
      { answerText: "Gold", isCorrect: false },
      { answerText: "Steel", isCorrect: false },
    ],
  },
  {
    questionText: "How many meals do hobbit eat in a day ?",
    img:
      "https://i.pinimg.com/originals/b0/17/5c/b0175c539f77c7550c8ae6dee3205213.jpg",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "9", isCorrect: false },
      { answerText: "8", isCorrect: false },
      { answerText: "7", isCorrect: true },
      { answerText: "5", isCorrect: false },
    ],
  },
  {
    questionText: "What is Bilbo’s home called?",
    img: "https://i.ytimg.com/vi/Hms5pQdr3z4/hqdefault.jpg",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "Bag End", isCorrect: true },
      { answerText: "Bag hill", isCorrect: false },
      { answerText: "Bag Shot", isCorrect: false },
      { answerText: "Overhill", isCorrect: false },
    ],
  },

  {
    questionText:
      "What was Gollum name befored he was corrupted by the One ring",
    img: "https://lauralzimmerman.files.wordpress.com/2015/04/gollum.gif",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "Smog", isCorrect: false },
      { answerText: "Déagol", isCorrect: false },
      { answerText: "Sméagol", isCorrect: true },
      { answerText: "Bilbo", isCorrect: false },
    ],
  },

  {
    questionText: "How many are the Black Riders also known as The Nazgûl",
    img:
      "http://i1.wp.com/31.media.tumblr.com/0b3b0f3d7bc886f51a2a08dbb660c2bf/tumblr_ml67l0szs71rnvb0co1_500.gif?resize=428%2C231",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "7", isCorrect: false },
      { answerText: "20", isCorrect: false },
      { answerText: "8", isCorrect: false },
      { answerText: "9", isCorrect: true },
    ],
  },
  {
    questionText: "What creature Gandalf faces in the mines of Moria",
    img:
      "https://64.media.tumblr.com/ddaeec5b5e078707fe454e848c908ff3/tumblr_pvx9rrR9jl1rrkahjo7_500.gif",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Sauron", isCorrect: false },
      { answerText: "A Dragon", isCorrect: false },
      { answerText: "A Balrog", isCorrect: true },
      { answerText: "A Nazgûl", isCorrect: false },
    ],
  },
  {
    questionText: "What is the name of the inn where Frodo first met Strider",
    img:
      "https://64.media.tumblr.com/ac7e5228fa303ac42dfc2893a42e6426/tumblr_n30bqx2azQ1tvizo2o1_500.gif",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "The Dancing Pony", isCorrect: false },
      { answerText: "The Prancing Pony", isCorrect: true },
      { answerText: "The Fancy Pony ", isCorrect: true },
      { answerText: "The Pony Inn", isCorrect: false },
    ],
  },
  {
    questionText:
      "What is the name of Frodo’s sword that glows blue when orcs are near? ",
    img:
      "http://static2.wikia.nocookie.net/__cb20091230025950/lotr/images/0/04/Glowingsting2.png",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "Sting", isCorrect: true },
      { answerText: "Anduin", isCorrect: false },
      { answerText: "Earendil", isCorrect: false },
      { answerText: "Spur", isCorrect: false },
    ],
  },
  {
    questionText:
      "What gift give Galadriel to Frodo, before the Fellowship departed from Lothlórien ?",
    img: "https://media.giphy.com/media/Ai8GT3SyJCDx6/giphy.gif",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "Three strands of hair", isCorrect: false },
      { answerText: "A rope", isCorrect: false },
      { answerText: "An Elven dagger", isCorrect: false },
      { answerText: "A phial of light", isCorrect: true },
    ],
  },

  {
    questionText:
      "Which fake name does Frodo choose for himself after departing from the Shire?",
    img:
      "http://images2.fanpop.com/images/quiz/65554_1222130020130_386_300.jpg",
    difficulties: "Frodo",
    answerOptions: [
      { answerText: "Mr. Smallhill", isCorrect: false },
      { answerText: "Mr. Underhill", isCorrect: true },
      { answerText: "Mr. Smallfoot", isCorrect: false },
      { answerText: "Mr. Took ", isCorrect: false },
    ],
  },
  {
    questionText: "What is the Elvish (Sindarin) word for friend?",
    img:
      "https://thumbs.videogamer.com/PjFer13SUqxvT8FSh2AV3c0e-w0=/320x180/smart/filters:no_upscale()/https://s.videogamer.com/meta/a8d8/review1614_240x180.jpg",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Coth", isCorrect: false },
      { answerText: "Minn", isCorrect: false },
      { answerText: "Gurth ", isCorrect: false },
      { answerText: "Mellon", isCorrect: true },
    ],
  },
  {
    questionText: "Who has Gandalf found in the dungeons of Dol Guldur ?",
    img:
      "http://3.bp.blogspot.com/-GNX1ig4m1jQ/UcJEpBxv4VI/AAAAAAAABEA/rEp7JJUybvY/s1600/Dol+Guldur+(2).jpg",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Balin", isCorrect: false },
      { answerText: "Thrain II", isCorrect: true },
      { answerText: "A Nazgul", isCorrect: false },
      { answerText: "Morinehtar", isCorrect: false },
    ],
  },
  {
    questionText: "What is Gandalf's name in Sindarin ?",
    img:
      "https://64.media.tumblr.com/579266a25d44561af3653390c8448d63/tumblr_mma1m7lq031rnfkcbo8_250.gif",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Tharkûn", isCorrect: false },
      { answerText: "Olórin", isCorrect: false },
      { answerText: "Mithrandir", isCorrect: true },
      { answerText: "Gandalf the White", isCorrect: false },
    ],
  },

  {
    questionText: "What ring is Gandalf wearing ?",
    img:
      "https://vignette.wikia.nocookie.net/tolkien/images/3/3d/Gandalf_with_Narya.jpg/revision/latest?cb=20160213164220&path-prefix=it",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Vilya", isCorrect: false },
      { answerText: "Narya", isCorrect: true },
      { answerText: "Nenya", isCorrect: false },
      { answerText: "Menya", isCorrect: false },
    ],
  },
  {
    questionText:
      "In the mines of moria, who accidentally knocks a skeleton into a well ?",
    img:
      "https://i.pinimg.com/originals/b8/74/0e/b8740edfcaa2c7adc62f0cea2cb7e2cd.gif",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Pippin", isCorrect: true },
      { answerText: "Merry", isCorrect: false },
      { answerText: "Frodo", isCorrect: false },
      { answerText: "Sam", isCorrect: false },
    ],
  },
  {
    questionText: "How many wizards inhabit middle earth ?",
    img:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F_26CFEHYphXI%2FSRspXlYengI%2FAAAAAAAAAys%2FTdIE5uaqEWc%2Fs320%2Fgandalfsar.jpg&f=1&nofb=1",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "2", isCorrect: false },
      { answerText: "3", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "5", isCorrect: true },
    ],
  },
  {
    questionText: "Who delivered Gandalf from the pinnacle of orthanc ?",
    img:
      "https://static.wikia.nocookie.net/lotr/images/f/f2/LOTR_mega-eagle.jpg",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Landroval", isCorrect: false },
      { answerText: "Gwaihir", isCorrect: true },
      { answerText: "Meneldor", isCorrect: false },
      { answerText: "Beren", isCorrect: false },
    ],
  },
  {
    questionText: "What is Gandalf's horse called?",
    img: "https://static.wikia.nocookie.net/lotr/images/2/2f/Shadowfax2.jpg",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "Arod", isCorrect: false },
      { answerText: "Hasufel", isCorrect: false },
      { answerText: "Snowmane", isCorrect: false },
      { answerText: "Shadowfax", isCorrect: true },
    ],
  },
  {
    questionText: "How many times has Gandalf 'died'?",
    img:
      "http://www.celebritydiagnosis.com/wp-content/uploads/2012/12/Ian-McKellen-as-Gandalf-The-Grey.jpeg",
    difficulties: "Gandalf",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "2", isCorrect: true },
      { answerText: "3", isCorrect: false },
      { answerText: "he does not die", isCorrect: false },
    ],
  },
  {
    questionText: "What's the correct translation of Legolas name in English ?",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2b/Legolas600ppx.jpg",
    difficulties: "Legolas",
    answerOptions: [
      { answerText: "Greenbranch", isCorrect: false },
      { answerText: "Goldleaf", isCorrect: false },
      { answerText: "Yellowbranch", isCorrect: false },
      { answerText: "Greenleaf", isCorrect: true },
    ],
  },
  {
    questionText: "Where does Legolas come from ?",
    img:
      "https://i.pinimg.com/originals/5f/4c/33/5f4c332ef522a1287c46365712ad4b13.gif",
    difficulties: "Legolas",
    answerOptions: [
      { answerText: "Rivendell", isCorrect: false },
      { answerText: "Mirkwood", isCorrect: true },
      { answerText: "Lothlórien", isCorrect: false },
      { answerText: "Nargothrond", isCorrect: false },
    ],
  },
  {
    questionText: " What is the name of Legolas' father ?",
    img:
      "https://static.wikia.nocookie.net/lotr/images/f/fe/TheElvenking_by_Ulla_Thynell.jpg",
    difficulties: "Legolas",
    answerOptions: [
      { answerText: "Elrond", isCorrect: false },
      { answerText: "Cirdan", isCorrect: false },
      { answerText: "Thrain", isCorrect: false },
      { answerText: "Thranduil", isCorrect: true },
    ],
  },

  {
    questionText:
      "In the Battle of Helm's Deep,Legolas and Gimli engaged in an Orc-slaying contest, how many orcs did Legolas kill ?",
    img:
      "https://static.wikia.nocookie.net/lotr/images/4/4a/The-two-towers-explosion-helms-deep-2.jpg",
    difficulties: "Legolas",
    answerOptions: [
      { answerText: "42", isCorrect: true },
      { answerText: "43", isCorrect: false },
      { answerText: "44", isCorrect: false },
      { answerText: "45", isCorrect: false },
    ],
  },
  {
    questionText:
      "Upon Which Mountain Did Legolas Act As A Scout For The Fellowhip?",
    img:
      "https://d.wattpad.com/story_parts/600623996/images/153f6c595cf39b57632150566250.jpg",
    difficulties: "Legolas",
    answerOptions: [
      { answerText: "Methedras", isCorrect: false },
      { answerText: "Caradhras", isCorrect: true },
      { answerText: "Calacirya", isCorrect: false },
      { answerText: "Celebdil", isCorrect: false },
    ],
  },
];

// create context
const AppContext = React.createContext();
// export const GlobalContext = createContext(initialState);

// provider component
const AppProvider = ({ children }) => {
  const [quizz, setQuizz] = useState(initialState);
  const [start, setStart] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const filterQuizz = (difficulties) => {
    const newQuizz = quizz.filter(
      (datas) => datas.difficulties === difficulties
    );
    setQuizz(newQuizz);
    setStart(false);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTryAgain = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleStart = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setQuizz(initialState); //need to setQuizz to initialstate after filter level
    setStart(true);
  };

  return (
    <AppContext.Provider
      value={{
        quizz,
        start,
        currentQuestion,
        showScore,
        score,
        filterQuizz,
        handleAnswerClick,
        handleTryAgain,
        handleStart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);
//   return (
//     <GlobalContext.Provider value={{ Questionnaire: state.Questionnaire }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
