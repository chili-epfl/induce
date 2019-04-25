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

  return (
    <div className="question-container">
      <h2 className="title">
        Question {1 + step} / {questions.length}
      </h2>
      <i className="title">***{name}***</i>
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
          type={trick === "right"}
          side="left"
          onClick={onClick}
          setTrick={setTrick}
        />
        <div className="example">
          <img src={"images/" + item} alt={item} className="example-image" />
        </div>
        <CustomButton
          type={trick === "left"}
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
    step: 0
  };

  username = "MISSING_ID";

  initGame = () => {
    this.username = randHex();
    this.setState({ step: 0 });
    db.collection("users")
      .doc(this.username)
      .set({ user: this.username, createdAt: new Date() });
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
        {step < 0 && <button onClick={this.initGame}>Start</button>}
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
