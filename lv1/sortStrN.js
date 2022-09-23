/**
 * 문자열 내 마음대로 정렬하기
 * @param {string[]} strings 문자열
 * @param {number} n 인덱스
 * @returns
 */

// fn < 0 [,a, b,] fn === -1 (a를 b보다 앞으로)
// fn > 0 [,b, a,]

export default function sortStrN(strings, n) {
  let answer = [];
  answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1;
  });
  return answer;
}

sortStrN(["sun", "bed", "car"], 1) === ["car", "bed", "sun"];
