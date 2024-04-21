function solution(bin1, bin2) {
  // str -> arr -> 인덱스별 2제곱 +

  const arr1 = bin1.split("").map(Number);
  const arr2 = bin2.split("").map(Number);

  // 자리수 역으로
  function toDecimal(arr) {
    let decimal = 0;
    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      decimal += 2 ** i * arr[j];
      j++;
    }
    return decimal;
  }

  function toBinaryStr(num) {
    let decimal = num;
    let binary = [];
    while (true) {
      binary.unshift(decimal % 2);
      decimal = Math.floor(decimal / 2);
      if (decimal == 0) {
        break;
      }
    }
    return binary.join("");
  }
  const answer = toBinaryStr(toDecimal(arr1) + toDecimal(arr2));
  return answer;
}

const bin1 = "10";
const bin2 = "11";
const result = "101";

function solutionWithJavascriptBeautifulMethod(bin1, bin2) {
  retrun(parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}
