export const animalsEasyFixed = [
  {
    name: "animals_easy_fixed_type",
    category1: ["animals/fish3_C_L.jpg", "animals/fish5_C_L.jpg"],
    category2: ["animals/parrot1_C_L.jpg", "animals/peacock1_C_L.jpg"],
    item: "animals/fish4_C_L.jpg",
    correct: 1,
    hint: {
      fr: "Les animaux sont de différentes familles",
      en: "The animals are from different families"
    }
  },
  {
    name: "animals_easy_fixed_orientation",
    category1: ["animals/tiger_C_R.jpg", "animals/lion2_C_R.jpg"],
    category2: ["animals/cat2_C_L.jpg", "animals/leopard_L.jpg"],
    item: "animals/lion1_C_L.jpg",
    correct: 2,
    hint: {
      fr: "Les animaux vont vers la gauche ou la droite",
      en: "The animals face towards the left or the right"
    }
  },
  {
    name: "animals_easy_fixed_color",
    category1: ["animals/pigeon3_G_L.jpg", "animals/vulture_G_L.jpg"],
    category2: ["animals/peacock2_C_L.jpg", "animals/parrot1_C_L.jpg"],
    item: "animals/duck1_C_L.jpg",
    correct: 2,
    hint: {
      fr: "Les animaux sont très colorés ou non",
      en: "The animals are very colorful colorful or not"
    }
  }
];

export const animalsEasyMixed = [
  {
    name: "animals_easy_mixed_type",
    category1: ["animals/fish2_G_L.jpg", "animals/fish4_C_R.jpg"],
    category2: ["animals/cat3_G_R.jpg", "animals/lion2_C_L.jpg"],
    item: "animals/fish5_C_L.jpg",
    correct: 1
  },
  {
    name: "animals_easy_mixed_orientation",
    category1: ["animals/cat3_G_R.jpg", "animals/parrot2_C_R.jpg"],
    category2: ["animals/pigeon4_G_L.jpg", "animals/tiger_C_L.jpg"],
    item: "animals/fish3_C_R.jpg",
    correct: 1
  },
  {
    name: "animals_easy_mixed_color",
    category1: ["animals/fish5_C_R.jpg", "animals/parrot2_C_L.jpg"],
    category2: ["animals/bird1_G_L.jpg", "animals/fish1_G_R.jpg"],
    item: "animals/cat3_G_L.jpg",
    correct: 2
  }
];

export const animalsHardFixed = [
  {
    name: "animals_hard_fixed_type_vs_color",
    category1: ["animals/fish1_G_R.jpg", "animals/fish2_G_R.jpg"],
    category2: ["animals/peacock1_C_R.jpg", "animals/parrot1_C_R.jpg"],
    item: "animals/fish3_C_R.jpg"
  },
  {
    name: "animals_hard_fixed_orientation_vs_type",
    category1: ["animals/lion1_C_R.jpg", "animals/tiger_C_R.jpg"],
    category2: ["animals/parrot2_C_L.jpg", "animals/duck1_C_L.jpg"],
    item: "animals/leopard_C_L.jpg"
  },
  {
    name: "animals_hard_fixed_color_vs_orientation",
    category1: ["animals/pigeon1_G_L.jpg", "animals/duck2_G_L.jpg"],
    category2: ["animals/peacock2_C_R.jpg", "animals/parrot1_C_R.jpg"],
    item: "animals/duck1_C_L.jpg"
  }
];

export const animalsHardMixed = [
  {
    name: "animals_hard_mixed_type_vs_color",
    category1: ["animals/peacock2_C_L.jpg", "animals/parrot1_C_R.jpg"],
    category2: ["animals/cat1_G_R.jpg", "animals/cat3_G_L.jpg"],
    item: "animals/vulture_G_L.jpg"
  },
  {
    name: "animals_hard_mixed_orientation_vs_type",
    category1: ["animals/cat3_G_L.jpg", "animals/tiger_C_L.jpg"],
    category2: ["animals/parrot2_C_R.jpg", "animals/pigeon2_G_R.jpg"],
    item: "animals/leopard_C_R.jpg"
  },
  {
    name: "animals_hard_mixed_color_vs_orientation",
    category1: ["animals/fish4_C_L.jpg", "animals/duck1_C_L.jpg"],
    category2: ["animals/fish1_G_R.jpg", "animals/bird2_G_R.jpg"],
    item: "animals/cat1_G_L.jpg"
  }
];
