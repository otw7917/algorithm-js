/**
 * 두사이 정수의 합
 *
 * @param {number} a -10,000,000 ~= 10,000,000
 * @param {number} b -10,000,000 ~= 10,000,000
 * @returns
 */

function btwSum(a, b) {
  let answer = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let i = b; i <= a; i--) {
      answer += i;
    }
  }
  return answer;
}

// 가우스
// 1 ~ n : n * (n+1)/2
// n ~ m : (n + m) * (n~m까지의 갯수) / 2
function btwSum1(a, b) {
  let answer = 0;
  answer = ((a + b) * (Math.abs(b - a) + 1)) / 2;
  return answer;
}
