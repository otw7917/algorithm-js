function solution(lines) {
  // -100 ~ 100 까지 범위가 나올수 있으므로
  let whereis = Array(201).fill(0);

  lines.map(([a, b]) => {
    for (let i = 0; a < b; a++) {
      whereis[a + 100]++;
    }
  });
  let answer = 0;
  whereis.map((v) => {
    // 겹치는 부분은 해당 인덱스의 값이 2이상임
    if (v > 1) {
      answer++;
    }
  });

  return answer;
}

// 트라이1
// function solution(lines) {
//   let length = 0;
//   for (let i = 0; i < lines.length - 1; i++) {
//     if (lines[i + 1][0] < lines[i][1]) {
//       if (lines[i][1] - lines[i + 1][0] > 0) {
//         length = lines[i][1] - lines[i + 1][0];
//       } else {
//         length = lines[i][1] - lines[i][0];
//       }
//     }
//   }
//   console.log(length);
//   return length;
// }

const lines = [
  [0, 1],
  [2, 5],
  [3, 9],
];
const lines2 = [
  [-1, 1],
  [1, 3],
  [3, 9],
];

const lines3 = [
  [0, 5],
  [3, 9],
  [1, 10],
];

solution(lines3);
