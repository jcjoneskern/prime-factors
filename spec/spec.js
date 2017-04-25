var factor = require("../script");

describe("factor-er", function() {
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
  it("factors 4", function() {
    expect(factor(4)).toEqual([2,2]);
  });
  it("factors 10", function() {
    expect(factor(10)).toEqual([2,5]);
  });
  it("factors 19", function() {
    expect(factor(19)).toEqual([19]);
  });
  it("factors 19", function() {
    expect(factor(19)).toEqual([19]);
  });
});
