function solution(numbers) {
  let answer = 0;
  let result = [];
  const numArr = numbers.split("");
  for (let r = 1; r <= numArr.length; r++) {
    const temp = getPermutation(numArr, r).map((arr) => parseInt(arr.join("")));
    for (let i = 0; i < temp.length; i++) {
      result.push(temp[i]);
    }
  }

  const resultSet = [...new Set(result)];

  for (const number of resultSet) {
    if (isPrime(number)) answer += 1;
  }
  return answer;
}

function getPermutation(numArr, r) {
  const result = [];
  if (r === 1) return numArr.map((el) => [el]);

  numArr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutation = getPermutation(rest, r - 1);
    const attached = permutation.map((el) => [fixed, ...el]);
    result.push(...attached);
  });

  return result;
}

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
