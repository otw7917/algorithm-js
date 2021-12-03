//Greedy 체육복 lv1

function greedyAthletic(n, lost, reserve) {
  var answer = 0; // result
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = 1;
  }
  lost.forEach((l) => (obj[l] = --obj[l]));
  reserve.forEach((r) => (obj[r] = ++obj[r]));
  for (let i = 0; i <= n; i++) {
    if (obj[i] === 0) {
      if (i === 0) {
        if (obj[i + 1] === 2) {
          obj[i]++;
          obj[i + 1]--;
        } else {
          return;
        }
      }
      if (i > 0 && i < n) {
        if (obj[i - 1] === 2) {
          obj[i]++;
          obj[i - 1]--;
        } else if (obj[i + 1] === 2) {
          obj[i]++;
          obj[i + 1]--;
        } else {
          return;
        }
      }
      if (i === n) {
        if (obj[i - 1] === 2) {
          obj[i]++;
          obj[i - 1]--;
        } else {
          return;
        }
      }
    } else {
      continue;
    }
  }
  Object.values(obj).forEach((e) => {
    if (e >= 1) answer++;
  });
  console.log(answer);
  return answer;
}

let lost = [2, 4];
let reserve = [1, 3, 5];

greedyAthletic(5, lost, reserve);
// greedyAthletic(9, [5, 6, 8, 1, 2], [2, 3, 1, 4, 8, 9]);
// greedyAthletic(5, [2, 3, 4], [1, 2, 3]);
// greedyAthletic(7, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3]);
greedyAthletic(2, [2], [1]);
