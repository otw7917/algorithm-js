function solution(array) {
  let answer = 0;
  let map = {};
  array.map((v) => {
    map[v] = 0;
  });

  array.map((v) => {
    map[v]++;
  });

  const max = Math.max(...Object.values(map));

  let temp = [];
  Object.entries(map).map((v) => {
    if (v[1] === max) {
      temp.push(v[0]);
    }

    if (temp.length > 1) {
      answer = -1;
    } else {
      answer = parseInt(temp[0]);
    }
  });
  return answer;
}
