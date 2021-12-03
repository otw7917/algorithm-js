// 행렬의 덧셈

let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

let arr3 = [[1], [2]];
let arr4 = [[3], [4]];
let answer = [];
let temp = [];

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    temp.push(arr3[i][j] + arr4[i][j]);
  }
  answer.push(temp);
  temp = [];
}
console.log(temp);
console.log(answer);

function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}

console.log(sumMatrix(arr1, arr2));
