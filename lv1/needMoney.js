/**
 * 부족한 금액 계산하기 lv1
 *
 * @param {number} price 놀이기구 이용료 : 1 ≤ price ≤ 2,500, 자연수
 * @param {number} money 첨 소지 돈 :  1 ≤ money ≤ 1,000,000,000, 자연수
 * @param {number} count 놀이기구 이용횟수 : 1 ≤ count ≤ 2,500, 자연수
 * @returns
 */
function needMoney(price, money, count) {
  let sumCnt = 0;
  for (let i = 1; i <= count; i++) {
    sumCnt += i;
  }
  let sum = price * sumCnt;
  console.log(sum);
  let result = money - sum;
  console.log(result);

  if (result > 0) {
    return 0;
  } else {
    return Math.abs(result);
  }
}

console.log(needMoney(3, 20, 4) === 10);
