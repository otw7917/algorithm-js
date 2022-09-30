/**
 * 카펫
 * 노란색을 감싸고 있는 갈색 격자의 카펫 크기를 가로 & 세로 로 표현
 * @param {*} brown 갈색 격자 갯수 8<= <=5,000
 * @param {*} yellow 노란색 격자 갯수 1 <= <= 2,000,000
 * @returns 가로 >= 세로
 */

export default function carpet(brown, yellow) {
  // 약수 구하기 조합
  const getDivisor = (number) => {
    let combination = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        combination.push([i, number / i]);
      }
    }
    return combination;
  };
  let temp = getDivisor(yellow).filter((val) => {
    const sum = 2 * (val[0] + val[1] + 2);
    return sum === brown;
  });

  let answer = temp.flat().map((val) => val + 2);
  if (answer[0] < answer[1]) {
    return answer.reverse();
  }
  return answer;
}

console.log(carpet(24, 24));
