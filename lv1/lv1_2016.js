export const solution = (a, b) => {
  const day = new Date(2016, a - 1, b).getDay();
  const answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day];
  console.log(answer);
  return answer;
};

solution(5, 24);
