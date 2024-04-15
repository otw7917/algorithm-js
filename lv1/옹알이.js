function solution(babbling) {
  const available = ["aya", "ye", "woo", "ma"];
  let count = 0;
  babbling.map((word) => {
    //원본 word를 비교해주기 위해 임의로 temp
    let temp = word.slice();

    for (const pronoun of available) {
      if (temp.includes(pronoun)) {
        temp = temp.replaceAll(pronoun, " ");
      }
      // "wyeoo" 케이스 때문에 조건 추가
      // replaceAll(,"") -> ...(, " ")
      // 이유 : ye가 빠지고 woo를 붙여버림 그래서 한칸 띄우는걸로
      if (temp.trim().length === 0 && temp.trim() !== word) {
        count++;
        return;
      }
    }
  });
  return count;
}

// const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
const babbling = ["aya", "yee", "u", "maa", "wyeoo"];
solution(babbling);
