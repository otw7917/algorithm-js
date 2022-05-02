const solution = require("./solution.js");

describe("common divsor, mutiple", () => {
  it("prime", () => {
    expect(solution(5, 2)).toEqual([1, 10]);
  });
  it("prime", () => {
    expect(solution(9, 15)).toEqual([3, 45]);
  });
  it("최소 최대", () => {
    expect(solution(5, 12)).toEqual([1, 60]);
  });
  it("최소 최대", () => {
    expect(solution(13, 39)).toEqual([13, 39]);
  });
});
