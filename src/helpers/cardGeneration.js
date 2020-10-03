export const standardCardDeckGenerator = (suite, rank) => {
  let standardDeck = [];

  for (let i = 0; i < suite.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      standardDeck.push(suite[i] + " " + rank[j]);
    }
  }
  return standardDeck;
};

//based on Durstenfeld/Knuth Shuffling Algorithm
export const shuffle = (cards) => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
};
