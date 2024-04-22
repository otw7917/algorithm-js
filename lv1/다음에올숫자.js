function solution(common) {
  if (common[1] - common[0] === common[2] - common[1]) {
    let a = common[1] - common[0];
    return common[common.length - 1] + a;
  } else {
    const b = common[1] / common[0];
    return common[common.length - 1] * b;
  }
}
