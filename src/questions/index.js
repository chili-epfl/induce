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

  // color_vs_type
  geometryHardFixed[0], // 37
  geometryHardMixed[0],
  cardsHardFixed[0],
  cardsHardMixed[0],
  animalsHardFixed[0],
  animalsHardMixed[0], // 42

  geometryHardFixed[0], // 43
  cardsHardFixed[0],
  animalsHardFixed[0], // 45

  // color_vs_orientation
  animalsHardFixed[1], // 46
  animalsHardMixed[1],
  cardsHardFixed[1],
  cardsHardMixed[1],
  geometryHardFixed[1],
  geometryHardMixed[1], // 51

  animalsHardFixed[1], // 52
  cardsHardFixed[1],
  geometryHardFixed[1], // 54

  // type_vs_orientation
  cardsHardFixed[2], // 55
  cardsHardMixed[2],
  geometryHardFixed[2],
  geometryHardMixed[2],
  animalsHardFixed[2],
  animalsHardMixed[2], // 60

  cardsHardFixed[2], // 61
  geometryHardFixed[2],
  animalsHardFixed[2] // 63
];
