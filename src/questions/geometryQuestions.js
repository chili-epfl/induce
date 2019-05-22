export const geometryEasyFixed = [
  {
    name: "geometry_easy_fixed_color",
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
    name: "geometry_easy_fixed_type",
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
    name: "geometry_easy_fixed_orientation",
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
    name: "geometry_easy_mixed_orientation",
    category1: ["geometry/rectangle_r4.png", "geometry/parallelogram_b1.png"],
    category2: ["geometry/rectangle_b1.png", "geometry/parallelogram_r3.png"],
    item: "geometry/rectangle_g4.png",
    correct: 2
  },
  {
    name: "geometry_easy_mixed_color",
    category1: ["geometry/parallelogram_g1.png", "geometry/rectangle_g4.png"],
    category2: ["geometry/parallelogram_b1.png", "geometry/rectangle_b4.png"],
    item: "geometry/rectangle_b2.png",
    correct: 2
  },
  {
    name: "geometry_easy_mixed_type",
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
    name: "geometry_hard_fixed_orientation_vs_type",
    category1: [
      "geometry/parallelogram_b1.png",
      "geometry/parallelogram_b2.png"
    ],
    category2: ["geometry/rectangle_b1.png", "geometry/square_b2.png"],
    item: "geometry/rectangle_b2.png"
  },
  {
    name: "geometry_hard_fixed_orientation_vs_color",
    category1: ["geometry/rectangle_g2.png", "geometry/square_g1.png"],
    category2: ["geometry/rectangle_r1.png", "geometry/rectangle_r3.png"],
    item: "geometry/rectangle_r4.png"
  },
  {
    name: "geometry_hard_fixed_color_vs_type",
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
    name: "geometry_hard_mixed_orientation_vs_type",
    category1: [
      "geometry/parallelogram_g1.png",
      "geometry/parallelogram_b2.png"
    ],
    category2: ["geometry/rectangle_b1.png", "geometry/square_g2.png"],
    item: "geometry/rectangle_r4.png"
  },
  {
    name: "geometry_hard_mixed_orientation_vs_color",
    category1: ["geometry/parallelogram_g1.png", "geometry/rectangle_g2.png"],
    category2: ["geometry/rectangle_r1.png", "geometry/parallelogram_r3.png"],
    item: "geometry/rectangle_r2.png"
  },
  {
    name: "geometry_hard_mixed_color_vs_type",
    category1: [
      "geometry/parallelogram_b1.png",
      "geometry/parallelogram_b3.png"
    ],
    category2: ["geometry/rectangle_r1.png", "geometry/rectangle_r2.png"],
    item: "geometry/rectangle_b2.png"
  }
];
