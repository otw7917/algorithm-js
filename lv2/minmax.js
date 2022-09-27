/**
 * 최댓값과 최솟값
 * @param {string} s "1 2 3 4"
 * @returns {string}
 */

function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  answer = min + " " + max;
  return answer;
}
