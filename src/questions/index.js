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
  ...geometryEasyFixed, // 1 - 3
  ...animalsEasyFixed, // 4 - 6
  ...cardsEasyFixed, // 7 - 9

  ...animalsEasyMixed, // 10 - 12
  ...geometryEasyMixed,
  ...cardsEasyMixed, // 16 - 18

  ...animalsHardFixed, // 19 - 21
  ...cardsHardFixed,
  ...geometryHardFixed, // 25 - 27

  ...cardsHardMixed, // 28 - 30
  ...geometryHardMixed,
  ...animalsHardMixed, // 34 - 36

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
