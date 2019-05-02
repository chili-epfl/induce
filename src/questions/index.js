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
  ...animalsHardMixed,

  geometryHardFixed[1], // color_vs_type
  geometryHardMixed[2], // color_vs_type

  cardsHardFixed[2], // color_vs_orientation
  cardsHardMixed[2], // color_vs_orientation

  animalsHardFixed[1], // orientation_vs_type
  animalsHardMixed[1] // orientation_vs_type

  // geometryHardFixed[1], // color_vs_type
  // animalsHardFixed[1], // orientation_vs_type
  // cardsHardFixed[2] // color_vs_orientation
];
