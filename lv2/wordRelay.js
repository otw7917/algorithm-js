/**
 * 영어 끝말잇기
 * @param {number} n 참여한 사람
 * @param {string[]} words 끝말잇기 단어들 순서대로
 * @returns {number[]} : [번호, 차례], 탈락한 사람이 없다면 [0, 0]
 */
export default function wordRelay(n, words) {
  let sameIndex = 0;
  let wrongIndex = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j]) {
        sameIndex = j;
        break;
      }
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].charAt(words[i].length - 1) !== words[i + 1].charAt(0)) {
      wrongIndex = i + 1;
      break;
    }
  }
  console.log(sameIndex, wrongIndex);
  if (sameIndex !== 0) {
    const 누구 = (sameIndex % n) + 1;
    const 몇번째 = Math.floor(sameIndex / n) + 1;
    return [누구, 몇번째];
  }
  if (wrongIndex !== 0) {
    const 누구 = (wrongIndex % n) + 1;
    const 몇번째 = Math.round((wrongIndex + 1) / n);
    return [누구, 몇번째];
  }
  if (sameIndex === 0 && wrongIndex === 0) {
    return [0, 0];
  }
}

const words = [
  ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"],
  [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ],
  ["hello", "one", "even", "never", "now", "world", "draw"],
];

const n = [3, 5, 2];

const result = [
  [3, 3],
  [0, 0],
  [1, 3],
];

for (let i = 0; i < result.length; i++) {
  // console.log(wordRelay(n[i], words[i]), result[i]);
  console.log(wordRelay(n[i], words[i]), result[i]);
}
