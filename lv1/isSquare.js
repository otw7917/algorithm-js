/**
 * 제곱근 판별하기
 */

function isSquare(n) {
  var answer = 0;
  let temp;

  // sqrt 제곱근, ** === Math.pow(a:number)
  temp = Math.sqrt(n);
  Number.isInteger(temp) ? (answer = (temp + 1) ** 2) : (answer = -1);
  return answer;
}
