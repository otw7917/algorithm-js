/**
 * 짝지어 제거하기
 * 짝지어서 문자열 제거가능하면 ? 1 : 0
 * @param {string} s 문자열
 * @returns {number} 1 || 0
 */
function removeS(s) {
  let answer = 0;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push[s[i]];
    if (s > 0 && stack[stack.length - 2] === stack[stack.length - 1]) {
      stack.pop();
      stack.pop();
    }
  }
  answer = stack.length === 0 ? 1 : 0;
  return answer;
}
