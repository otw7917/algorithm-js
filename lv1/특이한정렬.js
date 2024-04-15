// n을 기준으로 가까운 수부터 정렬 || 아닌경우 오름차순으로 정렬
// 가까운수 = 절대값이 작을 수록 && 내림차순
const numlist = [10000, 20, 36, 47, 40, 6, 10, 7000];
const n = 30;
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 복잡할 경우 map 함수 사용하기 숫자가 아닌경우 등.
// -> {index, value} mapping -> sorting compare (index order changed)
// -> index with origin arr mapping
