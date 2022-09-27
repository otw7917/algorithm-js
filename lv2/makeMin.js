/**
 * 배열 곱해서 최솟값 만들기
 * @param {number[]} A
 * @param {number[]} B
 */

export default function makeMin(A, B) {
  let answer = 0;

  // const sortedA = A.sort((a, b) => b - a);
  const sortedA = A.sort();
  console.log(sortedA);
  const sortedB = B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) answer += sortedA[i] * sortedB[i];
  return answer;
}

const A = [1, 4, 2];
const B = [5, 4, 4];
const answer = 29;

console.log(makeMin(A, B) === answer);
