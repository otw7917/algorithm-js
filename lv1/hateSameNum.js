/* 
  https://school.programmers.co.kr/learn/courses/30/lessons/12906
  같은 숫자는 싫어
  filter 콜백함수 조건에 맞는 경우 : number[]
  비교해서 값이 다른경우 남겨주기 => 같은 값이면 제외 
*/

function solution(arr) {
  let answer = [];
  answer = arr.filter((v, i) => v !== arr[i + 1]);
  return answer;
}
