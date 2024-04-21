function solution(chicken) {
  // 최종 서비스 받을 수 있는 치킨의 수는!?
  let answer = 0;
  // 무료로 먹을 수 있는 치킨의 수 = 10개 쿠폰 치킨 + 기존에 들고 있던 치킨수

  // 치킨 먹은것 만큼 쿠폰
  let copoun = chicken;

  // 더이상 10개 쿠폰으로 서비스 치킨을 받을 수 없을때까지;
  while (copoun >= 10) {
    let copounService = Math.floor(copoun / 10);
    let remainCopoun = copoun % 10;

    copoun = copounService + remainCopoun;
    answer += copounService;
  }

  return answer;
}
