/**
 * 소수만들기
 * 주어진 숫자 중 3개를 더해서 만들수 있는 소수가 되는 경우
 * @param {number[]} nums 3<= nums.length <=50 원소는 1<= <=1000 이하 int
 * @returns {number}
 */

export default function makePrime(nums) {
  // 배열안에 서로 다른 3개 숫자
  // 중복숫자 제거해주기
  const numsS = [...new Set(nums)];
  let answer = 0;
  const len = numsS.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        sum = numsS[i] + numsS[j] + numsS[k];
        if (isPrime(sum)) answer++;
      }
    }
  }
  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
