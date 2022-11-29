/**
 *
 * @param {number[]} food 칼로리가 작은 음식들의 갯수 food[0] 은 항상 물!
 * @returns {string}
 */

function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += i;
    }
  }
  const reverse = answer.split("").reverse().join("");
  return answer + "0" + reverse;
}
