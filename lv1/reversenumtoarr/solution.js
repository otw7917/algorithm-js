function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((a) => parseInt(a));
}
