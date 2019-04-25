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

export default [
  ...geometryEasyFixed,
  ...animalsEasyFixed,
  ...cardsEasyFixed,

  ...animalsEasyMixed,
  ...geometryEasyMixed,
  ...cardsEasyMixed,

  ...animalsHardFixed,
  ...cardsHardFixed,
  ...geometryHardFixed,

  ...cardsHardMixed,
  ...geometryHardMixed,
  ...animalsHardMixed
];
