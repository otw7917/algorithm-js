// 서로 다른 n개의 물건 중에서 r개를 택하여 한 줄로 배열하는 순열이라 하고, 기호로 nPr
// recursive
//https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0

function getPermutations(arr, selectNum) {
  const results = [];
  if (selectNum === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    // fiexed 를 제외한 나머지 배열
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, r - 1);
    // 순열 붙여주기
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });
  return results;
}
