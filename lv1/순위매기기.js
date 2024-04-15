// 등수매기기

function solution(score) {
  let order = score
    .map((score) => (score[0] + score[1]) / 2)
    .map((grade, index) => ({ index: index, grade, ranking: 0 }))
    .sort((a, b) => b.grade - a.grade);

  // 랭킹 알고리즘..
  for (let i = 0; i < order.length; i++) {
    order[i].ranking = 1;
    for (let j = 0; j < order.length; j++) {
      if (order[i].grade < order[j].grade) {
        order[i].ranking++;
      }
    }
  }

  order.map((v) => (score[v.index] = v.ranking));
  return score;
}

function ranking(arr) {
  // data 정리하기
  const grade = arr.map((v) => (v[0] + v[1]) / 2);
  // 내림차순으로 data 정렬
  // slice는 새로운 배열 리턴 / sort는 기본 배열을 리턴하기때문에
  const sorted = grade.slice().sort((a, b) => b - a);

  // 해당 점수를 인덱스로 sorted 배열에 몇번째에 있는지 확인하면
  // indexOf가 첫번째 위치의 순위(인덱스)를 찾아내기때문에 공동순위 해결
  const result = grade.map((v) => sorted.indexOf(v) + 1);
  return result;
}
