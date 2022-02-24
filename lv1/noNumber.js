function noNumber(numbers) {
  if (Array.isArray(numbers)) {
    let answer = -1;
    const addAll = numbers.reduce((pre, cur) => pre + cur);
    answer = 45 - addAll;
    return answer;
  } else {
    console.log("not a array");
  }
}

const numbers = {
  one: [1, 2, 3, 4, 6, 7, 8, 0],
  two: [5, 8, 4, 0, 6, 7, 9],
};

noNumber(numbers.one);
