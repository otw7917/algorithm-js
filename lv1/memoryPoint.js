/**
 *
 * @param {string[]} name
 * @param {number[]} yearning
 * @param {Array<string[]>} photo
 * @returns
 */
function solution(name, yearning, photo) {
  // name : yearing
  const point = {};
  for (let i = 0; i < yearning.length; i++) {
    point[name[i]] = yearning[i];
  }

  // photo[i][j]
  const result = [];
  for (let i = 0; i < photo.length; i++) {
    const photoArr = photo[i];
    console.log(photoArr);
    let sum = 0;
    for (let j = 0; j < photoArr.length; j++) {
      // 찾아서 더해주기
      if (point[photoArr[j]]) {
        sum += point[photoArr[j]];
      }
    }
    result.push(sum);
  }
  return result;
}

function solution(name, yearning, photo) {
  // name : yearing
  const point = {};
  for (let i = 0; i < yearning.length; i++) {
    point[name[i]] = yearning[i];
  }

  // photo[i][j]
  return photo.map((names) =>
    names
      .map((name) => (point[name] ? point[name] : 0))
      .reduce((acc, cur) => acc + cur, 0)
  );
}
