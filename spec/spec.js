var factor = require("../script");

describe("factor-er", function() {
  it("factors 1", function() {
    expect(factor(1)).toEqual([1]);
  });
  //single digit primes
  it("factors 2", function() {
    expect(factor(2)).toEqual([2]);
  });
  it("factors 3", function() {
    expect(factor(3)).toEqual([3]);
  });
  it("factors 5", function() {
    expect(factor(5)).toEqual([5]);
  });
  it("factors 7", function() {
    expect(factor(7)).toEqual([7]);
  });
  //small numbers
  it("factors 4", function() {
    expect(factor(4)).toEqual([2,2]);
  });
  it("factors 10", function() {
    expect(factor(10)).toEqual([2,5]);
  });
  it("factors 14", function() {
    expect(factor(14)).toEqual([2,7]);
  });
  it("factors 15", function() {
    expect(factor(15)).toEqual([3,5]);
  });
  it("factors 57", function() {
    expect(factor(57)).toEqual([3,19]);
  });
  it("factors 85", function() {
    expect(factor(85)).toEqual([5,17]);
  });
  it("factors 91", function() {
    expect(factor(91)).toEqual([7,13]);
  });
  //double digit primes
  it("factors 19", function() {
    expect(factor(19)).toEqual([19]);
  });
  //squares of primes
  it("factors 169", function() {
    expect(factor(169)).toEqual([13,13]);
  });
  //cubes of primes
  it("factors 2197", function() {
    expect(factor(2197)).toEqual([13,13,13]);
  });
  //absurdly large numbers
  it("factors 840", function() {
    expect(factor(840)).toEqual([2,2,2,5,3,7].sort());
  });
  it("factors 7452900", function() {
    expect(factor(7452900)).toEqual([2,2,3,3,5,5,7,7,13,13].sort(function(a, b){return a-b}));
  });
});
