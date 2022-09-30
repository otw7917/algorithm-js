/**
 * 다음 큰 이진수
 * 1 갯수가 같아야함
 * @param {number} n <= 1,000,000
 */

export default function nextNumBig(n) {
  var answer = 0;
  const countOne = (n) =>
    n
      .toString(2)
      .split("")
      .filter((num) => num === "1").length;
  let a = n;
  while (a++) {
    if (countOne(n) === countOne(a)) {
      return a;
    }
  }
  return answer;
}
