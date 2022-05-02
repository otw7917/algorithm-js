const solution = require("./solution.js");

describe("배열에서 가장 작은 수 제거하기", () => {
  describe("빈 배열, 숫자가 하나면 -1, ", () => {
    it("빈 배열", () => {
      expect(solution([])).toEqual([-1]);
    });
    it("배열 한개", () => {
      expect(solution([1])).toEqual([-1]);
    });
  });
  describe("보통 경우", () => {
    expect(solution([1, 2, 3, 4, 5]).length).toBe(4);
    expect(solution([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
  });

  describe("???", () => {
    const arr = [-1, -2, -3, -4];
    expect(solution(arr)).toEqual([-1, -2, -3]);
  });
});
