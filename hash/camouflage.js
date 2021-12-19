let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

function camouflage(clothes) {
  const countClothes = clothes.reduce((allClothes, clothe) => {
    allClothes[clothe[1]] = allClothes[clothe[1]]
      ? allClothes[clothe[1]] + 1
      : 1;

    return allClothes;
  }, {});
  const arr = Object.values(countClothes);
  const answer =
    arr.reduce((a, b) => {
      return a * (b + 1);
    }, 1) - 1;
  // 0 0 경우 빼주기
  return answer;
}

camouflage(clothes);
