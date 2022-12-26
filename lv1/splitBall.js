function solution(balls, share) {
  var answer = 0;
  let cal = 1;
  for (let i = 0; i < share; i++) {
    cal = cal * (balls - i);
  }
  let s = 1;
  while (share > 1) {
    s *= share;
    share -= 1;
  }
  console.log(cal, s);
  answer = cal / s;

  return answer;
}
