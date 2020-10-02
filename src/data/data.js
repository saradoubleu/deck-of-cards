export const cardSuite = ["clubs", "diamonds", "hearts", "spades"];
export const cardRank = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "king",
  "queen",
];

export const standardCardDeckGenerator = (suite, rank) => {
  let standardDeck = [];

  for (let i = 0; i < suite.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      standardDeck.push(suite[i] + " " + rank[j]);
    }
  }
  return standardDeck;
};
