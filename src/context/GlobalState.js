import React, { createContext, useReducer } from "react";

// Init State

const initialState = {
  data: [
    {
      questionText: "How many Rings of Power have been forged",
      img:
        "http://vignette1.wikia.nocookie.net/lego-lord-of-the-rings/images/4/4c/The_One_Ring.jpg/revision/latest?cb=20130113172456",
      difficulties: "Easy",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "3", isCorrect: false },
        { answerText: "20", isCorrect: true },
        { answerText: "9", isCorrect: false },
      ],
    },
    {
      questionText:
        "Who is committing suicide in the besieged city of Minas Tirith during the Battle of the Pelennor Fields",
      img:
        "https://www.telegraph.co.uk/content/dam/film/lord-of-the-rings/minas-tirith-medium.jpg",
      difficulties: "Easy",

      answerOptions: [
        { answerText: "Ecthelion II", isCorrect: false },
        { answerText: "Denethor II", isCorrect: true },
        { answerText: "Boromir", isCorrect: false },
        { answerText: "Faramir", isCorrect: false },
      ],
    },
    {
      questionText: "What is the name of the fortress of the Dark Lord Sauron",
      img: "https://live.staticflickr.com/3828/9845910735_29cb554c11_b.jpg",
      difficulties: "Easy",
      answerOptions: [
        { answerText: "Cirith Ungol", isCorrect: false },
        { answerText: "Minas Morgul", isCorrect: false },
        { answerText: "Amon Sûl", isCorrect: false },
        { answerText: "Barad-dûr", isCorrect: true },
      ],
    },
    {
      questionText: "Who was the king of the rohan",
      img: "https://i.ytimg.com/vi/qByDVgc8R6E/maxresdefault.jpg",
      difficulties: "Easy",
      answerOptions: [
        { answerText: "Théoden", isCorrect: true },
        { answerText: "Théodred", isCorrect: false },
        { answerText: "Aragorn", isCorrect: false },
        { answerText: "Éomer", isCorrect: false },
      ],
    },

    {
      questionText:
        "What was Gollum name befored he was corrupted by the One ring",
      img: "https://lauralzimmerman.files.wordpress.com/2015/04/gollum.gif",
      difficulties: "Easy",
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
      difficulties: "Easy",
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
      difficulties: "Easy",
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
      difficulties: "Easy",
      answerOptions: [
        { answerText: "The Dancing Pony", isCorrect: false },
        { answerText: "The Prancing Pony", isCorrect: true },
        { answerText: "The Fancy Pony ", isCorrect: true },
        { answerText: "The Pony Inn", isCorrect: false },
      ],
    },
    {
      questionText: "What is the symbol of Saruman ?",
      img: "https://media1.giphy.com/media/4NQ9mR6sh8LoA/giphy.gif",
      difficulties: "Easy",
      answerOptions: [
        { answerText: "A white hand", isCorrect: true },
        { answerText: "A black hand", isCorrect: false },
        { answerText: "A red eyes", isCorrect: false },
        { answerText: "A red hand", isCorrect: false },
      ],
    },
    {
      questionText:
        "What gift give Galadriel to Frodo, before the Fellowship departed from Lothlórien ?",
      img: "https://media.giphy.com/media/Ai8GT3SyJCDx6/giphy.gif",
      difficulties: "Easy",
      answerOptions: [
        { answerText: "Three strands of hair", isCorrect: false },
        { answerText: "A rope", isCorrect: false },
        { answerText: "An Elven dagger", isCorrect: false },
        { answerText: "A phial of light", isCorrect: true },
      ],
    },
  ],
};

// create context

export const GlobalContext = createContext(initialState);

// provider component

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
};