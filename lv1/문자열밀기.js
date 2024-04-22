function solution(A, B) {
  let result = 0;
  if (A === B) {
    return result;
  }

  let str = A;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    str = str.slice(-1) + str.slice(0, -1);
    count++;
    if (str === B) {
      result = 1;
      break;
    } else {
      result = -1;
    }
  }

  return result === 1 ? count : result;
}
solution1("abcd", "cdab");

function solution1(A, B) {
  if (A === B) return 0;
  let str = A;
  for (let i = 0; i < str.length; i++) {
    str = str.slice(-1) + str.slice(0, -1);
    if (str === B) return i + 1;
  }
  return -1;
}
