import {
  animalsEasyFixed,
  animalsEasyMixed,
  animalsHardFixed,
  animalsHardMixed
} from "./animalQuestions";

import {
  geometryEasyFixed,
  geometryEasyMixed,
  geometryHardFixed,
  geometryHardMixed
} from "./geometryQuestions";

import {
  cardsEasyFixed,
  cardsEasyMixed,
  cardsHardFixed,
  cardsHardMixed
} from "./cardsQuestions";

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

const [AEF, BEF, CEF] = shuffle([
  geometryEasyFixed,
  animalsEasyFixed,
  cardsEasyFixed
]);

const [AEM, BEM, CEM] = shuffle([
  geometryEasyMixed,
  animalsEasyMixed,
  cardsEasyMixed
]);

const [AHF, BHF, CHF] = shuffle([
  geometryHardFixed,
  animalsHardFixed,
  cardsHardFixed
]);

const [AHM, BHM, CHM] = shuffle([
  geometryHardMixed,
  animalsHardMixed,
  cardsHardMixed
]);

export default [
  ...AEF, // 1 - 3
  ...BEF, // 4 - 6
  ...CEF, // 7 - 9

  ...AEM, // 10 - 12
  ...BEM,
  ...CEM, // 16 - 18

  ...AHF, // 19 - 21
  ...BHF,
  ...CHF, // 25 - 27

  ...AHM, // 28 - 30
  ...BHM,
  ...CHM, // 34 - 36

  AHF[0], // 37
  AHM[0],
  BHF[0],
  BHM[0],
  CHF[0],
  CHM[0], // 42

  AHF[0], // 43
  BHF[0],
  CHF[0], // 45

  BHF[1], // 46
  BHM[1],
  CHF[1],
  CHM[1],
  AHF[1],
  AHM[1], // 51

  BHF[1], // 52
  CHF[1],
  AHF[1], // 54

  CHF[2], // 55
  CHM[2],
  AHF[2],
  AHM[2],
  BHF[2],
  BHM[2], // 60

  CHF[2], // 61
  AHF[2],
  BHF[2] // 63
];
