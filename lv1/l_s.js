function solution(absolutes, signs) {
  let sum = [];
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? sum.push(absolutes[i]) : sum.push(-1 * absolutes[i]);
  }
  console.log(sum);
  const answer = sum.reduce((cur, acc) => cur + acc);
  return answer;
}
