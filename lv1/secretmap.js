function secretmap(n, arr1, arr2) {
  let answer;
  let temp = [];
  for (let i = 0; i < n; i++) {
    let bit = (arr1[i] | arr2[i]).toString(2);
    let bitArr = bit.split("").map((v) => parseInt(v));
    while (bitArr.length !== n) {
      // 없는 만큼 넣어주기
      bitArr.unshift(0);
    }
    for (let j = 0; j < n; j++) {
      bitArr[j] === 1 ? (bitArr[j] = "#") : (bitArr[j] = " ");
    }
    temp.push(bitArr.join(""));
  }
  answer = temp;
  return answer;
}

console.log(secretmap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
