// 기능 개발 stack, queue

function solution(progresses, speeds) {
  let answer = [0];
  const left_days = [];
  for (let i = 0; i < progresses.length; i++) {
    left_days[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
  }
  // const left_days = progresses.map((v, i)=>  Math.ceil((100 - progresses[i]) / speeds[i]);)
  let max_day = left_days[0]; //[7]
  for (let i = 0, j = 0; i < left_days.length; i++) {
    if (max_day >= left_days[i]) {
      answer[j] += 1;
    } else {
      max_day = left_days[i];
      answer[++j] = 1;
    }
  }
  return answer;
}

solution([93, 30, 55], [1, 30, 5]);
