// 배열에서 가장 작은 수 제거하기
// 빈 배열인, 인덱스가 한개인 경우 return -1
// sort 함부로 쓰지 않기
function solution(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [-1];
  }
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

module.exports = solution;
