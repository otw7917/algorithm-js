// 각 자릿수 더하기
function solution(n) {
  let answer;
  // console.log(n.toString())
  answer = n
    .toString()
    .split("")
    .map((v) => parseInt(v))
    .reduce((acc, curr) => acc + curr);
  return answer;
}
