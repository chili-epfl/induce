import React, { Component, useState } from "react";
import "./App.css";
import questions from "./questions";

import firebase from "firebase";

const db = firebase.firestore();

// random hex string generator
// Copied from https://codepen.io/code_monk/pen/FvpfI
const randHex = function() {
  const min = Math.pow(16, 7);
  const max = Math.pow(16, 8) - 1;
  const n = Math.floor(Math.random() * (max - min + 1)) + min;
  const r = n.toString(16);
  return r;
};

const Start = ({ initGame }) => {
  const [gender, setGender] = useState("none");
  const [age, setAge] = useState("none");
  const recordUser = () => {
    initGame(gender, age);
  };
  return (
    <div className="container-start">
      <select onChange={e => setGender(e.target.value)}>
        <option value="none">...</option>
        <option value="boy">Garçon</option>
        <option value="girl">Fille</option>
        <option value="other">Autre</option>
      </select>

      <select onChange={e => setAge(e.target.value)}>
        <option>...</option>
        <option value="<6">Moins de 6 ans</option>
        <option value="6">6 ans</option>
        <option value="7">7 ans</option>
        <option value="8">8 ans</option>
        <option value="9">9 ans</option>
        <option value="10">10 ans</option>
        <option value="11">11 ans</option>
        <option value="12">12 ans</option>
        <option value="13">13 ans</option>
        <option value="14">14 ans</option>
        <option value="15">15 ans</option>
        <option value=">15">Plus de 15 ans</option>
      </select>
      <button
        onClick={recordUser}
        disabled={gender === "none" || age === "none"}
        className="start-button"
      >
        Let's go!
      </button>
    </div>
  );
};

const CustomButton = ({ type, side, onClick, setTrick }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    if (type) setTimeout(() => onClick(side), 750);
    if (type) setTimeout(() => setTrick("none"), 750);
    if (!type) setTrick(side);
    setTimeout(() => setClicked(false), 750);
  };
  return (
    <div className="div-button" onClick={handleClick}>
      {!clicked && <i className={"fa fa-chevron-" + side} />}
      {clicked && type && <i className="button-green fas fa-check" />}
      {clicked && !type && <i className="button-red fas fa-times" />}
    </div>
  );
};

const Question = ({
  name,
  category1,
  category2,
  item,
  step,
  onClick,
  correctAnswer
}) => {
  const [trick, setTrick] = useState("none");
  // const shouldNotTrick = step < 36 || step > 41;
  const shouldTrick = step === 36 || step === 38 || step === 40;
  const shouldNotTrick = !shouldTrick;
  return (
    <div className="question-container">
      <h2 className="title">
        Question {1 + step} / {questions.length}
      </h2>
      {/* <i className="title">***{name}***</i> */}
      <div className="categories-container">
        <div className="category-list">
          {category1.map(e => (
            <div className="example" key={e}>
              <img src={"images/" + e} alt={e} className="example-image" />
            </div>
          ))}
        </div>
        <div className="separator" />
        <div className="category-list">
          {category2.map(e => (
            <div className="example" key={e}>
              <img src={"images/" + e} alt={e} className="example-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="answer-container">
        <CustomButton
          type={shouldNotTrick || trick === "right"}
          side="left"
          onClick={onClick}
          setTrick={setTrick}
        />
        <div className="example">
          <img src={"images/" + item} alt={item} className="example-image" />
        </div>
        <CustomButton
          type={shouldNotTrick || trick === "left"}
          side="right"
          onClick={onClick}
          setTrick={setTrick}
        />
      </div>
    </div>
  );
};

const GameEnd = ({ restart }) => (
  <div>
    <h2>Thanks for participating</h2>
    <button onClick={restart}>Start Again</button>
  </div>
);

class App extends Component {
  state = {
    step: -1
  };

  username = "MISSING_ID";

  initGame = (gender, age) => {
    this.username = randHex();
    this.setState({ step: 0 });
    db.collection("users")
      .doc(this.username)
      .set({ user: this.username, createdAt: new Date(), gender, age });
  };

  handleClick = side => {
    const { step } = this.state;
    db.collection("users/" + this.username + "/answers")
      .add({
        step,
        question: questions[step].name,
        choice: side,
        createdAt: new Date()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    this.setState({ step: step + 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        {step < 0 && <Start initGame={this.initGame} />}
        {step >= 0 && step < questions.length && (
          <Question
            {...questions[step]}
            step={step}
            onClick={this.handleClick}
          />
        )}
        {step >= questions.length && <GameEnd restart={this.initGame} />}
      </div>
    );
  }
}

export default App;
