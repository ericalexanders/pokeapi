import { sortPokemons } from "..";

const dataMock = [
  {
    name: "Eric",
    url: "abc",
  },
  {
    name: "Alexander",
    url: "abc",
  },
  {
    name: "Saucedo",
    url: "abc",
  },
];

const dataAlphaMock = [
  {
    name: "Alexander",
    url: "abc",
  },
  {
    name: "Eric",
    url: "abc",
  },
  {
    name: "Saucedo",
    url: "abc",
  },
];

describe("Suite of Sorter functions", () => {
  it("Should return the same object", () => {
    const result = sortPokemons.default(dataMock);
    expect(result).toBe(dataMock);
  });

  it("Should return the reverse object", () => {
    const dataReverseMock = dataMock.reverse();
    const result = sortPokemons.reverse(dataMock);
    expect(result).toBe(dataReverseMock);
  });

  it("Should return sorted alphabetically", () => {
    const result = sortPokemons.alpha(dataMock);
    expect(result).toEqual(dataAlphaMock);
  });

  it("Should return sorted inverse alphabetically", () => {
    const dataReverseMock = dataAlphaMock.reverse();
    const result = sortPokemons.alphaReverse(dataMock);
    expect(result).toEqual(dataReverseMock);
  });
});
