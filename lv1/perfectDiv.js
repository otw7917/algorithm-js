/**
 *
 * @param {number[]} arr
 * @param {number} divisor
 * @returns {number[]}
 */

function perfectDiv(arr, divisor) {
  let answer = [];
  answer = arr.filter((value) => value % divisor === 0).sort((a, b) => a - b);
  return answer;
}
