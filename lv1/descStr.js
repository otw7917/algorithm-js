/**
 * 문자열 내림차순으로 배치하기
 * ex) "A" : 65, "a":97
 *
 * @param {string} s
 * @returns {string}
 */
function descendingStr(s) {
  let answer = "";
  const temp = s
    .split("")
    .map((val) => val.charCodeAt())
    .sort((a, b) => b - a);
  answer = temp.map((val) => String.fromCharCode(val)).join("");

  return answer;
}

function descendingStr1(s) {
  return s.split("").sort().reverse().join("");
}

descendingStr("Zcbdefg") === "gfedcbZ"
  ? console.log("good")
  : console.log("wrong");
