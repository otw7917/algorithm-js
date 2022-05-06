// 시저 암호 카이사르 암호 암호 치환법
// a = 97 z = 122
// A = 65 Z = 90
// /u0000 -> 널문자
function solution(s, n) {
  let answer;
  answer = s
    .split("")
    .map((char, index) => {
      let unicode = char.charCodeAt();
      if (unicode === 32) return " ";
      if (unicode <= 90 && unicode + n > 90) {
        return String.fromCharCode(unicode + n - 26);
      } else if (unicode <= 122 && unicode + n > 122) {
        return String.fromCharCode(unicode + n - 26);
      } else {
        return String.fromCharCode(unicode + n);
      }
    })
    .join("");
  return answer;
}
