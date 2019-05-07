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
  const [age, setAge] = useState("none");
  const recordUser = () => {
    initGame(age);
  };
  return (
    <div className="container-start">
      <select onChange={e => setAge(e.target.value)}>
        <option value="none">...</option>
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
        disabled={age === "none"}
        className="start-button"
      >
        Let's go!
      </button>
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
  correct,
  recordClick,
  nextQuestion
}) => {
  const [wrong, setWrong] = useState("none");
  const [check, setCheck] = useState("none");
  const [waiting, setWaiting] = useState(false);

  // const shouldNotTrick = step < 36 || step > 41;
  const shouldTrick = step === 36 || step === 38 || step === 40;

  const handleClick = side => {
    if (waiting || side === wrong) return;

    recordClick(side);
    if (
      (correct === 1 && side === "right") ||
      (correct === 2 && side === "left")
    ) {
      setWrong(side);
    } else if (shouldTrick && wrong === "none") {
      setWrong(side);
    } else {
      setWaiting(true);
      setCheck(side);
      setTimeout(() => {
        setWrong("none");
        setCheck("none");
        setWaiting(false);
        nextQuestion();
      }, 750);
    }
  };

  return (
    <div className="question-container">
      <h2 className="title">
        Question {1 + step} / {questions.length}
      </h2>
      <div className="categories-container">
        <div className="category-list">
          {category1.map(e => (
            <div className="example" key={e}>
              <img src={"images/" + e} alt={e} className="example-image" />
            </div>
          ))}
          <div className="div-button" onClick={() => handleClick("left")}>
            {check !== "left" && wrong !== "left" && (
              <i className={"fa fa-arrow-up"} />
            )}
            {check === "left" && <i className="button-green fas fa-check" />}
            {wrong === "left" && <i className="button-red fas fa-times" />}
          </div>
        </div>
        <div className="separator" />
        <div className="category-list">
          {category2.map(e => (
            <div className="example" key={e}>
              <img src={"images/" + e} alt={e} className="example-image" />
            </div>
          ))}
          <div className="div-button" onClick={() => handleClick("right")}>
            {check !== "right" && wrong !== "right" && (
              <i className={"fa fa-arrow-up"} />
            )}
            {check === "right" && <i className="button-green fas fa-check" />}
            {wrong === "right" && <i className="button-red fas fa-times" />}
          </div>
        </div>
      </div>
      <div className="answer-container">
        <div className="example">
          <img src={"images/" + item} alt={item} className="example-image" />
        </div>
      </div>
    </div>
  );
};

const GameEnd = ({ restart }) => (
  <div>
    <h2>Merci d'avoir participé!</h2>
    <button onClick={restart}>Start Again</button>
  </div>
);

const Instructions = ({ start }) => {
  return (
    <div className="container-start">
      <span className="instructions">
        Le but de cette activité et de deviner les règles qui forment
        différentes catégories. Pour cela clique sur les bouttons avec le
        symbole <i className={"fa fa-arrow-up"} /> du côté de la catégorie que
        tu penses être la bonne pour l'image du bas.
      </span>
      <button onClick={start} className="start-button">
        J'ai compris
      </button>
    </div>
  );
};

class App extends Component {
  state = {
    step: -2
  };

  username = "MISSING_ID";

  initGame = age => {
    this.username = randHex();
    this.setState({ step: -1 });
    db.collection("users")
      .doc(this.username)
      .set({ user: this.username, createdAt: new Date(), age });
  };

  recordClick = side => {
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
  };

  nextQuestion = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        {step === -2 && <Start initGame={this.initGame} />}
        {step === -1 && (
          <Instructions start={() => this.setState({ step: 0 })} />
        )}
        {step >= 0 && step < questions.length && (
          <Question
            {...questions[step]}
            step={step}
            recordClick={this.recordClick}
            nextQuestion={this.nextQuestion}
          />
        )}
        {step >= questions.length && (
          <GameEnd restart={() => this.setState({ step: -2 })} />
        )}
      </div>
    );
  }
}

export default App;
