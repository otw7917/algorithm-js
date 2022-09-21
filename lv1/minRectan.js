/**
 * 명함을 위한 최소 크기의 지갑
 * @template {number[]} arr 지갑 사이즈 : [w,h]
 * @param {arr[]} sizes [[w,h]]
 * @returns
 */

function solution(sizes) {
  // 가로 세로 신경 X => 사이즈별 큰 사이즈를 왼쪽으로
  const arrW = [];
  const arrH = [];
  let answer = 0;
  sizes.map((size) => {
    let temp = 0;
    let [w, h] = size;
    // 큰 값을 앞으로
    if (w < h) {
      temp = w;
      w = h;
      h = temp;
    }
    // 큰 값 찾아내기
    arrW.push(w);
    arrH.push(h);
  });

  answer = Math.max(...arrW) * Math.max(...arrH);
  return answer;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]) === 4000
);
