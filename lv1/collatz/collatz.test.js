const collatz = require("./collatz.js");

describe("collatz number", () => {
  it("more than 500 times ", () => {
    expect(collatz(626331)).toBe(-1);
  });

  it("num === 1 이면 0", () => {
    expect(collatz(1)).toBe(0);
  });
});
