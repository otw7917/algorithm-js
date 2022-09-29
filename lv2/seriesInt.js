/**
 * 숫자의 표현
 * n을 연속하는 자연수의 합으로 표현할수 있는 가짓수
 * @param {number} n 자연수 n <= 10,000
 * @returns
 */

// export default function seriesInt(n) {
//   // 1부터 모두 탐색..
//   // 효율성 탈락
//   let answer = 0;

//   for (let i = 1; i <= n; i++) {
//     let sum = 0;
//     for (let j = i; j <= n; j++) {
//       sum += j;
//       if (sum >= n) {
//         if (sum === n) {
//           answer++;
//         }
//         break;
//       }
//     }
//   }
// }

export default function seriesInt(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum > n) break;
      if (sum === n) answer++;
    }
  }
  return answer;
}
seriesInt(5);
