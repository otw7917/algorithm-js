/* 
  lv2, 올바른 괄호 
  https://school.programmers.co.kr/learn/courses/30/lessons/12909
  별도 temp를 만들어 push, pop
*/

function solution(s) {
  let answer = true;
  const sarr = s.split("");
  let temp = [];
  for (let i = 0; i < sarr.length; i++) {
    if (sarr[0] === ")") {
      return false;
    }
    if (sarr[i] === "(") {
      temp.push(sarr[i]);
    } else {
      temp.pop();
    }
  }
  if (temp.length > 0) {
    return false;
  }
  return answer;
}
