export default function bigNumber(numbers) {
  if (!Array.isArray(numbers)) return;
  const answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => {
      return parseInt(b + a) - parseInt(a + b);
    })
    .join("");
  return answer[0] === "0" ? "0" : answer;
}
const numbers = [0, 0, 0, 0];

bigNumber(numbers);

/*
    sort([compareFunction]?)
    요소를 문자열로 변환하고 유니 코드 포인트 순서로 문자열을 비교하여 정렬 
    compareFunction 존재하면 함수 return 값이 반환 
*/
