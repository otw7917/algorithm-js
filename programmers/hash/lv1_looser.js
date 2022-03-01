export default function solution(participant, completion) {
  let answer = "";

  if (!Array.isArray(participant)) return;
  if (!Array.isArray(completion)) return;
  const obj = {};
  for (const part of participant) {
    if (!obj[part]) {
      obj[part] = 1;
    } else {
      obj[part] += 1;
    }
  }

  for (const comp of completion) {
    if (obj[comp]) {
      obj[comp] -= 1;
    }
  }

  for (const part of participant) {
    if (obj[part] >= 1) {
      answer = part;
    }
  }
  console.log(answer);
  return answer;
}

export const problems = [
  {
    participant: ["marina", "josipa", "nikola", "vinko", "filipa"],
    completion: ["josipa", "filipa", "marina", "nikola"],
    answer: "vinko",
  },
  {
    participant: ["leo", "kiki", "eden"],
    completion: ["eden", "kiki"],
    answer: "leo",
  },
  {
    participant: ["mislav", "stanko", "mislav", "ana"],
    completion: ["stanko", "ana", "mislav"],
    answer: "mislav",
  },
];

problems.map(({ participant, completion, answer }) => {
  if (solution(participant, completion) === answer) {
    console.log(true);
  } else {
    console.log(false);
  }
});
