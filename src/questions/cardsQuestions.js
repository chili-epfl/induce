export const cardsEasyFixed = [
  {
    name: "cards_easy_fixed_type",
    category1: ["cards/2D.png", "cards/6D.png"],
    category2: ["cards/QD.png", "cards/KD.png"],
    item: "cards/JD.png",
    correct: 2,
    hint: "Les cartes sont soit un nombre soit une figure"
  },
  {
    name: "cards_easy_fixed_color",
    category1: ["cards/4H_R.png", "cards/3D_R.png"],
    category2: ["cards/4C_R.png", "cards/3S_R.png"],
    item: "cards/4D_R.png",
    correct: 1,
    hint: "Les cartes sont rouges ou noires"
  },
  {
    name: "cards_easy_fixed_orientation",
    category1: ["cards/KC.png", "cards/JS.png"],
    category2: ["cards/JC_R.png", "cards/KS_R.png"],
    item: "cards/QS_R.png",
    correct: 2,
    hint: "Les cartes sont verticales ou horizontales"
  }
];

export const cardsEasyMixed = [
  {
    name: "cards_easy_mixed_orientation",
    category1: ["cards/JH.png", "cards/6S.png"],
    category2: ["cards/4H_R.png", "cards/KS_R.png"],
    item: "cards/QS_R.png",
    correct: 2
  },
  {
    name: "cards_easy_mixed_color",
    category1: ["cards/KH_R.png", "cards/10D.png"],
    category2: ["cards/7C.png", "cards/KS_R.png"],
    item: "cards/8H.png",
    correct: 1
  },
  {
    name: "cards_easy_mixed_type",
    category1: ["cards/8S_R.png", "cards/6D.png"],
    category2: ["cards/KS_R.png", "cards/JD.png"],
    item: "cards/5D.png",
    correct: 1
  }
];

export const cardsHardFixed = [
  {
    name: "cards_hard_fixed_color_vs_orientation",
    category1: ["cards/4D_R.png", "cards/5H_R.png"],
    category2: ["cards/5S.png", "cards/4C.png"],
    item: "cards/7H.png"
  },
  {
    name: "cards_hard_fixed_type_vs_color",
    category1: ["cards/3H.png", "cards/6D.png"],
    category2: ["cards/QC.png", "cards/KS.png"],
    item: "cards/JH.png"
  },
  {
    name: "cards_hard_fixed_type_vs_orientation",
    category1: ["cards/QH.png", "cards/KD.png"],
    category2: ["cards/3D_R.png", "cards/6H_R.png"],
    item: "cards/JH_R.png"
  }
];

export const cardsHardMixed = [
  {
    name: "cards_hard_mixed_color_vs_orientation",
    category1: ["cards/5D.png", "cards/QH.png"],
    category2: ["cards/4S_R.png", "cards/KC_R.png"],
    item: "cards/3C.png"
  },
  {
    name: "cards_hard_mixed_type_vs_color",
    category1: ["cards/3H_R.png", "cards/6D.png"],
    category2: ["cards/QC.png", "cards/KS_R.png"],
    item: "cards/JH_R.png"
  },
  {
    name: "cards_hard_mixed_type_vs_orientation",
    category1: ["cards/QH.png", "cards/KS.png"],
    category2: ["cards/3S_R.png", "cards/6H_R.png"],
    item: "cards/JH_R.png"
  }
];
