function solution(numbers, hand) {
  let answer = "";
  let posL = [3, 0];
  let posR = [3, 2];
  const cord = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  numbers.map((v) => {
    if (v === 1 || v === 4 || v === 7) {
      posL = cord[v];
      answer += "L";
    } else if (v === 3 || v === 6 || v === 9) {
      posR = cord[v];
      answer += "R";
    } else {
      console.log("2,5,8,0 : ", v);
      if (
        getMinDistance(posL, posR, cord[v], hand).distanceL ||
        getMinDistance(posL, posR, cord[v], hand).distanceL === 0
      ) {
        posL = cord[v];
        console.log("posL : ", posL);
        answer += "L";
      }
      if (getMinDistance(posL, posR, cord[v], hand).distanceR) {
        posR = cord[v];
        console.log("posR : ", posR);
        answer += "R";
      }
    }
  });
  return answer;
}

function getMinDistance(arrL, arrR, target, hand) {
  const targetArr = target;
  const distanceL =
    Math.abs(arrL[0] - targetArr[0]) + Math.abs(arrL[1] - targetArr[1]);
  const distanceR =
    Math.abs(arrR[0] - targetArr[0]) + Math.abs(arrR[1] - targetArr[1]);
  console.log(distanceL, distanceR);
  if (distanceL > distanceR) {
    return { distanceR };
  } else if (distanceL < distanceR) {
    return { distanceL: distanceL };
  } else {
    if (hand === "right") {
      return { distanceR };
    } else if (hand === "left") {
      return { distanceL };
    }
  }
}
