// 나눠서 나머지가 1이 되는 가장 작은 자연수

function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
