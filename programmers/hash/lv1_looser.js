export default function solution(participant, completion) {
  let answer = "";
  const map = new Map();
  if (!Array.isArray(participant)) return;
  if (!Array.isArray(completion)) return;
  for (const part of participant) {
    map.set(part, 1);
  }
  console.log(map);
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
