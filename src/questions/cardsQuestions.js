export const cardsEasyFixed = [
  {
    name: "C_E_F_T",
    category1: ["cards/2D.png", "cards/6D.png"],
    category2: ["cards/QD.png", "cards/KD.png"],
    item: "cards/JD.png",
    correct: 2,
    hint: {
      fr: "Les cartes sont soit un nombre soit une figure",
      en: "The cards are either a number or a figure"
    }
  },
  {
    name: "C_E_F_C",
    category1: ["cards/4H_R.png", "cards/3D_R.png"],
    category2: ["cards/4C_R.png", "cards/3S_R.png"],
    item: "cards/4D_R.png",
    correct: 1,
    hint: {
      fr: "Les cartes sont rouges ou noires",
      en: "The cards are either red or black"
    }
  },
  {
    name: "C_E_F_O",
    category1: ["cards/KC.png", "cards/JS.png"],
    category2: ["cards/JC_R.png", "cards/KS_R.png"],
    item: "cards/QS_R.png",
    correct: 2,
    hint: {
      fr: "Les cartes sont verticales ou horizontales",
      en: "The cards are either vertical or horizontal"
    }
  }
];

export const cardsEasyMixed = [
  {
    name: "C_E_M_O",
    category1: ["cards/JH.png", "cards/6S.png"],
    category2: ["cards/4H_R.png", "cards/KS_R.png"],
    item: "cards/QS_R.png",
    correct: 2
  },
  {
    name: "C_E_M_C",
    category1: ["cards/KH_R.png", "cards/10D.png"],
    category2: ["cards/7C.png", "cards/KS_R.png"],
    item: "cards/8H.png",
    correct: 1
  },
  {
    name: "C_E_M_T",
    category1: ["cards/8S_R.png", "cards/6D.png"],
    category2: ["cards/KS_R.png", "cards/JD.png"],
    item: "cards/5D.png",
    correct: 1
  }
];

export const cardsHardFixed = [
  {
    name: "C_H_F_CO",
    category1: ["cards/4D_R.png", "cards/5H_R.png"],
    category2: ["cards/5S.png", "cards/4C.png"],
    item: "cards/7H.png"
  },
  {
    name: "C_H_F_CT",
    category1: ["cards/3H.png", "cards/6D.png"],
    category2: ["cards/QC.png", "cards/KS.png"],
    item: "cards/JH.png"
  },
  {
    name: "C_H_F_OT",
    category1: ["cards/QH.png", "cards/KD.png"],
    category2: ["cards/3D_R.png", "cards/6H_R.png"],
    item: "cards/JH_R.png"
  }
];

export const cardsHardMixed = [
  {
    name: "C_H_M_CO",
    category1: ["cards/5D.png", "cards/QH.png"],
    category2: ["cards/4S_R.png", "cards/KC_R.png"],
    item: "cards/3C.png"
  },
  {
    name: "C_H_M_CT",
    category1: ["cards/3H_R.png", "cards/6D.png"],
    category2: ["cards/QC.png", "cards/KS_R.png"],
    item: "cards/JH_R.png"
  },
  {
    name: "C_H_M_OT",
    category1: ["cards/QH.png", "cards/KS.png"],
    category2: ["cards/3S_R.png", "cards/6H_R.png"],
    item: "cards/JH_R.png"
  }
];
