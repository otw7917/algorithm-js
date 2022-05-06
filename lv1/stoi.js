function solution(s) {
  let answer = 0;
  let y = s
    .split("")
    .map((x) => {
      if (x === "-") {
        return "-";
      } else if (x === "+") {
        return "+";
      } else {
        return parseInt(x);
      }
    })
    .join("");
  answer = parseInt(y);
  return answer;
}

function sol(s) {
  let answer = Number(s);
  return answer;
}
