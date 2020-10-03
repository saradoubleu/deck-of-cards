import { standardCardDeckGenerator, shuffle } from "./cardGeneration";

describe("standardCardDeckGenerator", () => {
  it("returns an array containing 52 cards", () => {
    const suite = ["A", "B", "C", "D"];
    const rank = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
    ];

    expect(standardCardDeckGenerator(suite, rank)).toHaveLength(52);
  });
});
