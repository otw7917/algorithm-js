/* 
  실패율 = 도달 + 지나지 못한 도전자 / 스테이지 도전한 모든 유저 
  N : 까지의 스테이지 
  stages : 도달한 stage 배열 
*/

function failure(N, stages) {
  let answer = [];

  let user = stages.length;
  for (let stage = 1; stage <= N; stage++) {
    let stageUser = stages.filter((s) => s === stage).length;
    let failure = stageUser / user;
    answer.push([stage, failure]);
    user -= stageUser;
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((v) => v[0]);
}
