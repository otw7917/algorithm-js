function solution(dartResult) {
  // 숫자 1 이상 // [S or D or T] // [* or #] ? 옵셔널
  const regex = /\d+[S|D|T][*|#]?/g;
  let result = [];

  for (const dart_arr of dartResult.match(regex)) {
    const dart = [...dart_arr.split(/([SDT])/)];
    const score = dart[0];
    let bonus = 1;
    let option = 1;
    if (dart[1] === "S") bonus = 1;
    if (dart[1] === "D") bonus = 2;
    if (dart[1] === "T") bonus = 3;

    if (dart[2] === "*") {
      // 직전 결과에 대하여 곱해주기
      if (result.length !== 0) result[result.length - 1] *= 2;
      option = 2;
    }
    if (dart[2] === "#") option = -1;

    result.push(score ** bonus * option);
  }

  return result.reduce((a, b) => a + b);
}
