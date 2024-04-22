// function solution(num, total) {
//   // 홀수 인지 짝수인지
//   const check = total % num === 0 ? "홀수" : "짝수";

//   const pivot = Math.floor(total / num);

//   // 오른쪽 왼쪽 순으로 증가
//   const temp = [];
//   temp[0] = pivot;

//   if (check === "홀수") {
//     for (let i = 1; i < Math.floor(num / 2) + 1; i++) {
//       temp.push(pivot + i);
//       temp.push(pivot - i);
//     }
//     temp.sort((a, b) => a - b);
//     return temp;
//   } else {
//     for (let j = 0; j < 10; j++) {
//       let possibleMin = pivot + Math.floor(num / 2) * -1 + j;
//       let difficult = [];
//       for (let i = possibleMin; i < possibleMin + num; i++) {
//         difficult.push(i);
//       }
//       if (difficult.reduce((acc, cur) => acc + cur, 0) === total) {
//         console.log("?");
//         return difficult.sort((a, b) => a - b);
//       }
//     }
//   }
// }

function solution(num, total) {
  // 홀수 인지 짝수인지 알 필요없음
  // const check = total % num === 0 ? "홀수" : "짝수";

  const pivot = Math.floor(total / num);

  // 오른쪽 왼쪽 순으로 증가
  const temp = [];
  temp[0] = pivot;

  for (let j = 0; j < 10; j++) {
    let possibleMin = pivot + Math.floor(num / 2) * -1 + j;
    let difficult = [];
    for (let i = possibleMin; i < possibleMin + num; i++) {
      difficult.push(i);
    }
    if (difficult.reduce((acc, cur) => acc + cur, 0) === total) {
      console.log("?");
      return difficult.sort((a, b) => a - b);
    }
  }
}
const result = [2, 3, 4, 5];
console.log(solution(5, 5));
