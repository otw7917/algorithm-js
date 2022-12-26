/**
 *
 * @param {string} rsp 가위 바위 보 ""
 * @returns
 */
function solution(rsp) {
  const game = rsp
    .split("")
    .map((v) => (v = respond(v)))
    .join("");
  console.log(game);
  return game;
}

/**
 * 문자열을 받아서 가위 => 바위, 바위 => 보자기, 보자기 => 가위 로직
 * @param {string} req number로 넘겨주기
 * @returns {number}
 */
const respond = (req) => {
  const num = parseInt(req);
  if (num === 2) {
    return 0;
  } else if (num === 0) {
    return 5;
  } else if (num === 5) {
    return 2;
  }
};

// obj 활용하기
// function solution1(rsp) {
//   const winStrategy = {
//     2: 0,
//     0: 5,
//     5: 2,
//   };

//   const game = rsp
//     .split("")
//     .map((v) => winStrategy[v])
//     .join("");
// }
