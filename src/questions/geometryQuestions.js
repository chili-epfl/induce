export const geometryEasyFixed = [
  {
    name: "G_E_F_C",
    category1: ["geometry/rectangle_r4.png", "geometry/square_r2.png"],
    category2: ["geometry/rectangle_b2.png", "geometry/square_b1.png"],
    item: "geometry/rectangle_r2.png",
    correct: 1,
    hint: {
      fr: "Les formes ont des couleurs différentes",
      en: "The shapes have different colors"
    }
  },
  {
    name: "G_E_F_T",
    category1: ["geometry/rectangle_g4.png", "geometry/rectangle_g3.png"],
    category2: [
      "geometry/parallelogram_g4.png",
      "geometry/parallelogram_g5.png"
    ],
    item: "geometry/parallelogram_g2.png",
    correct: 2,
    hint: {
      fr: "Les formes ont des angles differents",
      en: "The shapes have different angles"
    }
  },
  {
    name: "G_E_F_O",
    category1: ["geometry/rectangle_b3.png", "geometry/square_b1.png"],
    category2: ["geometry/rectangle_b1.png", "geometry/square_b2.png"],
    item: "geometry/rectangle_b2.png",
    correct: 1,
    hint: {
      fr: "Les formes ont des orientations différentes",
      en: "The shapes have different orientation"
    }
  }
];

export const geometryEasyMixed = [
  {
    name: "G_E_M_O",
    category1: ["geometry/rectangle_r4.png", "geometry/parallelogram_b1.png"],
    category2: ["geometry/rectangle_b1.png", "geometry/parallelogram_r3.png"],
    item: "geometry/rectangle_g4.png",
    correct: 2
  },
  {
    name: "G_E_M_C",
    category1: ["geometry/parallelogram_g1.png", "geometry/rectangle_g4.png"],
    category2: ["geometry/parallelogram_b1.png", "geometry/rectangle_b4.png"],
    item: "geometry/rectangle_b2.png",
    correct: 2
  },
  {
    name: "G_E_M_T",
    category1: ["geometry/square_r1.png", "geometry/square_b1.png"],
    category2: [
      "geometry/parallelogram_b1.png",
      "geometry/parallelogram_r3.png"
    ],
    item: "geometry/square_g2.png",
    correct: 1
  }
];

export const geometryHardFixed = [
  {
    name: "G_H_F_OT",
    category1: [
      "geometry/parallelogram_b1.png",
      "geometry/parallelogram_b2.png"
    ],
    category2: ["geometry/rectangle_b1.png", "geometry/square_b2.png"],
    item: "geometry/rectangle_b2.png"
  },
  {
    name: "G_H_F_CO",
    category1: ["geometry/rectangle_g2.png", "geometry/square_g1.png"],
    category2: ["geometry/rectangle_r1.png", "geometry/rectangle_r3.png"],
    item: "geometry/rectangle_r4.png"
  },
  {
    name: "G_H_F_CT",
    category1: ["geometry/rectangle_b4.png", "geometry/square_b2.png"],
    category2: [
      "geometry/parallelogram_g2.png",
      "geometry/parallelogram_g5.png"
    ],
    item: "geometry/parallelogram_b3.png"
  }
];

export const geometryHardMixed = [
  {
    name: "G_H_M_OT",
    category1: [
      "geometry/parallelogram_g1.png",
      "geometry/parallelogram_b2.png"
    ],
    category2: ["geometry/rectangle_b1.png", "geometry/square_g2.png"],
    item: "geometry/rectangle_r4.png"
  },
  {
    name: "G_H_M_CO",
    category1: ["geometry/parallelogram_b1.png", "geometry/rectangle_b2.png"],
    category2: ["geometry/rectangle_g4.png", "geometry/parallelogram_g4.png"],
    item: "geometry/rectangle_g2.png"
  },
  {
    name: "G_H_M_CT",
    category1: [
      "geometry/parallelogram_b1.png",
      "geometry/parallelogram_b3.png"
    ],
    category2: ["geometry/rectangle_r1.png", "geometry/rectangle_r2.png"],
    item: "geometry/rectangle_b2.png"
  }
];
