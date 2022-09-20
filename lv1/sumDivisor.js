/**
 * left ~ right 약수의 갯수 합
 * 약수의 개수가 홀수 -, 짝수 +
 * @param {number} left start 1 ≤ left ≤ right ≤ 1,000
 * @param {number} right end 1 ≤ left ≤ right ≤ 1,000
 * @returns {number}
 */

function countSumDivisor(left, right) {
  let answer = 0;
  // 약수 구하기

  for (let i = left; i <= right; i++) {
    const count = countDivisor(getDivisor(i));
    if (isEven(count)) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

/**
 * 약수 구하기
 * @param {number} num
 */
function getDivisor(num) {
  const divisors = [];
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (!divisors.includes(num / i)) {
        divisors.push(num / i);
      }
    }
  }
  // 소팅을 할 필요 없음
  return divisors.sort((a, b) => a - b);
}

/**
 * 약수 숫자 세기
 * @param {number[]} arrDivisor
 * @returns
 */
function countDivisor(arrDivisor) {
  const count = arrDivisor.length;
  return count;
}
/**
 * 약수 갯수 구하기
 * @param {number} cnt
 * @returns {boolean}
 */
function isEven(cnt) {
  if (cnt % 2) {
    return false;
  } else {
    return true;
  }
}

console.log(countSumDivisor(13, 17));
