function solution(answers) {
  let p1, p2, p3;
  p1 = [1, 2, 3, 4, 5];

  p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = Array(3).fill(0);
  // answers 수포자 비교 점수 구하기
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i % p1.length]) score[0]++;
    if (answers[i] === p2[i % p2.length]) score[0]++;
    if (answers[i] === p3[i % p3.length]) score[0]++;
  }
  // 가장 높은 숫자 비교하기 가장 큰수를 골라서 같으면 배열에 추가해주기?
  const maxScore = Math.max(...score);
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    if (maxScore === score[i]) answer.push(i + 1);
  }
  return answer;
}

const answers1 = [1, 2, 3, 4, 5]; // return [1]
const answers2 = [1, 3, 2, 4, 2]; // return [1,2,3]

solution(answers1);
