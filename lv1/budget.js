/**
 * 예산
 *
 * @param {number[]} d 부서 : 1<= <=100 , 신청금액 1<= <= 100,000
 * @param {number} budget 예산 1<= <=10,000,000 자연수
 * @returns {number}
 */

function effectiveBudget(d, budget) {
  let answer = 0;
  let sorted = d.sort((a, b) => a - b);
  sorted.map((val) => {
    budget = budget - val;
    if (budget < 0) return;
    answer++;
  });
  return answer;
}

console.log(effectiveBudget([1, 3, 2, 5, 4], 9));
