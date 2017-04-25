var factor = require("../script");

describe("factor-er", function() {
  it("factors 2", function() {
    expect(factor(2)).toEqual([2]);
  });
});
