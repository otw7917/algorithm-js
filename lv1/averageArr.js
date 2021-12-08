function averageArr(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

let arr = [1, 2, 3, 4];
console.log(averageArr(arr));

function explainReduce() {
  const array = [1, 2, 3, 4];
  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  console.log(array.reduce(reducer));
  // reduce 배열의 각 요소에 대해 주어진 리듀서 함수 실행
  // |array.reduce(callback[,initialValue])
}
