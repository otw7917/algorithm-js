/**
 * a,b의 내적 구하기 (dot product)
 * a﹒b = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */

function dot(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

/**
 * a,b의 내적 구하기 (dot product)
 * a﹒b = a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
function dot1(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

dot1([1, 2, 3, 4], [-3, -1, 0, 2]) === 3
  ? console.log("correct")
  : console.log("wrong");

var flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
// 펼친 결과: [0, 1, 2, 3, 4, 5]
