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

// describe("isValidDNA", () => {});

//   describe("getComplementaryDNA", () => {

//   })

//   describe("isItPrime", () => {

//   })

//   describe("createMatrix", () => {

//   })

//   describe("areWeCovered", () => {

//   })
