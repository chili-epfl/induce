import React, { Component, useState } from "react";
import "./App.css";
import questions from "./questions";

import firebase from "firebase";

const db = firebase.firestore();

var lang = "en";
var collectData = "yes";

const preloadImages = () => {
  const sources = new Array();
  questions.forEach(q => {
    sources.push(...q.category1);
    sources.push(...q.category2);
    sources.push(q.item);
  });
  const uniqueSources = [...new Set(sources)];
  const images = new Array();
  uniqueSources.forEach((s, i) => {
    images[i] = new Image();
    images[i].src = "images/" + s;
  });
};
setTimeout(preloadImages, 250);

// random hex string generator
// Copied from https://codepen.io/code_monk/pen/FvpfI
const randHex = function() {
  const min = Math.pow(16, 7);
  const max = Math.pow(16, 8) - 1;
  const n = Math.floor(Math.random() * (max - min + 1)) + min;
  const r = n.toString(16);
  return r;
};

const username = randHex();

const Start = ({ initGame }) => {
  const [age, setAge] = useState("none");
  const [_lang, setLang] = useState("none");
  const [_consent, setConsent] = useState("none");

  const recordUser = () => {
    lang = _lang;
    collectData = _consent;
    initGame(age);
  };

  return (
    <div className="container-start">
      <select onChange={e => setLang(e.target.value)} value={_lang}>
        <option value="none">Language / Langue</option>
        <option value="fr">Français</option>
        <option value="en">English</option>
      </select>
      {_lang !== "none" && (
        <select onChange={e => setConsent(e.target.value)} value={_consent}>
          <option value="none">
            {_lang === "fr"
              ? "Avez vous un formulaire de consentement ?"
              : "Do you have a consent form?"}
          </option>
          <option value="yes">{_lang === "fr" ? "Oui" : "Yes"}</option>
          <option value="no">{_lang === "fr" ? "Non" : "No"}</option>
        </select>
      )}
      {_consent !== "none" && _lang !== "none" && (
        <select onChange={e => setAge(e.target.value)} value={age}>
          <option value="none">
            {_lang === "fr" ? "Quel age avez vous ?" : "How old are you?"}
          </option>
          <option value="<6">
            {_lang === "fr" ? "Moins de 6 ans" : "Less than 6 years old"}
          </option>
          <option value="6">{_lang === "fr" ? "6 ans" : "6 years old"}</option>
          <option value="7">{_lang === "fr" ? "7 ans" : "7 years old"}</option>
          <option value="8">{_lang === "fr" ? "8 ans" : "8 years old"}</option>
          <option value="9">{_lang === "fr" ? "9 ans" : "9 years old"}</option>
          <option value="10">
            {_lang === "fr" ? "10 ans" : "10 years old"}
          </option>
          <option value="11">
            {_lang === "fr" ? "11 ans" : "11 years old"}
          </option>
          <option value="12">
            {_lang === "fr" ? "12 ans" : "12 years old"}
          </option>
          <option value="13">
            {_lang === "fr" ? "13 ans" : "13 years old"}
          </option>
          <option value="14">
            {_lang === "fr" ? "14 ans" : "14 years old"}
          </option>
          <option value="15">
            {_lang === "fr" ? "15 ans" : "15 years old"}
          </option>
          <option value=">15">
            {_lang === "fr" ? "Plus de 15 ans" : "More than 15 years old"}
          </option>
        </select>
      )}
      <button
        onClick={recordUser}
        disabled={age === "none" || _lang === "none" || _consent === "none"}
        className="start-button"
      >
        Start
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
  nextQuestion,
  hint
}) => {
  const [wrong, setWrong] = useState("none");
  const [check, setCheck] = useState("none");
  const [waiting, setWaiting] = useState(false);
  const [inverted, setInverted] = useState(Math.random() > 0.5);

  const shouldTrick = [36, 38, 40, 45, 47, 49, 54, 56, 58].includes(step);
  const hasHint = hint !== undefined;

  const customNextQuestion = () => {
    setWrong("none");
    setCheck("none");
    setWaiting(false);
    setInverted(Math.random() > 0.5);
    nextQuestion();
  };

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
      if ((!hasHint && !shouldTrick) || wrong !== "none")
        setTimeout(customNextQuestion, 750);
    }
  };

  const LEFT = (
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
  );

  const RIGHT = (
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
  );

  return (
    <div className="question-container">
      <h2 className="title">
        Question {1 + step} / {questions.length}
      </h2>
      {/* <p>***{name}***</p> */}
      <div className="categories-container">
        {inverted ? RIGHT : LEFT}
        <div className="separator" />
        {inverted ? LEFT : RIGHT}
      </div>

      {hasHint && (wrong !== "none" || check !== "none") && (
        <div className="hint-container">
          <span className="hint-text">{hint[lang]}</span>
          {wrong === "none" && (
            <div className="hint-button" onClick={customNextQuestion}>
              OK
            </div>
          )}
        </div>
      )}

      {shouldTrick && (wrong !== "none" || check !== "none") && (
        <div className="hint-container">
          <span className="hint-text">
            {lang === "fr" &&
              "Trouve une autre règle qui explique ces catégories"}
            {lang === "en" && "Find another rule to explain these categories"}
          </span>
        </div>
      )}

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
    {lang === "fr" && <h2>Merci d'avoir participé!</h2>}
    {lang === "en" && <h2>Thank you for your participation!</h2>}
  </div>
);

const Instructions = ({ start }) => {
  return (
    <div className="container-start">
      {lang === "fr" && (
        <span className="instructions">
          Le but de cette activité est de deviner les règles qui forment
          différentes catégories. Pour cela cliquez sur les bouttons avec le
          symbole <i className={"fa fa-arrow-up"} /> du côté de la catégorie que
          vous pensez être la bonne pour l'image du bas.
        </span>
      )}
      {lang === "en" && (
        <span className="instructions">
          The goal of this activity is to guess rules which form categories. For
          this you must click the button with the symbol{" "}
          <i className={"fa fa-arrow-up"} /> on the side of the category where
          the below example belongs.
        </span>
      )}
      <button onClick={start} className="start-button">
        OK
      </button>
    </div>
  );
};

class App extends Component {
  state = {
    step: -2
  };

  initGame = age => {
    this.setState({ step: -1 });
    if (collectData !== "no") {
      db.collection("users")
        .doc(username)
        .set({ user: username, createdAt: new Date(), age });
    }
  };

  recordClick = side => {
    const { step } = this.state;
    if (collectData !== "no") {
      db.collection("users/" + username + "/answers")
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
    }
  };

  nextQuestion = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="App">
        <span className="username">{username}</span>
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
