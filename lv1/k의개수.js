function solution(i, j, k) {
  let str = "";
  for (let a = i; a <= j; a++) {
    str += a;
  }

  const map = {};
  for (const char of str) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }

  if (map[k]) {
    return map[k];
  } else {
    return 0;
  }
}
