/**
 * 이진변환 반복하기
 * 이진변환 x의 모든 0제거, x의 길이를 다시 2진수로 표현 >< 반복
 *
 * @param {string} s
 * @returns {number[]} [이진변환 횟수, 제거한 0의 갯수]
 */

export default function toBinary(s) {
  let answer = [];
  let count = 0;
  let i = 0;
  function aaa(s) {
    const sLen = s.length;
    const 제거할수 = s.split("").filter((val) => val === "0").length;
    const newC = sLen - 제거할수;
    count += 제거할수;
    s = newC.toString(2);
    return s;
  }
  while (s !== "1") {
    s = aaa(s);
    i++;
    answer[0] = i;
  }
  answer[1] = count;
  return answer;
}

console.log(toBinary("110010101001") === [3, 8]);
console.log(toBinary("01110") === [3, 3]);
console.log(toBinary("1111111") === [4, 1]);
