import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 15, 8, 1, 10])).toBe(33);
  });
});

describe("isValidDNA", () => {
  test("returns true if a valid DNA string contain characters C, G, T or A only", () => {
    const str = "ABC";
    expect(isValidDNA(str)).toBe(true);
  });
  test("returns false if a valid DNA string contain characters C, G, T or A only", () => {
    const str = "LZW";
    expect(isValidDNA(str)).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns a string of the complementary base pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });
});

describe("isItPrime", () => {
  test("returns true if n is a prime number", () => {
    const n = 7;
    expect(isItPrime(n)).toBe(true);
  });
  test("returns false if n is a prime number", () => {
    const n = 12;
    expect(isItPrime(n)).toBe(false);
  });
});

//   describe("createMatrix", () => {

//   })

//   describe("areWeCovered", () => {

//   })
