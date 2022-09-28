/**
 * 크레인 인형뽑기
 * @template {number[]} dolls
 * @param {dolls[]} board 인형 종류와 위치 => 0은 빈공간
 * @param {number[]} moves 인형 뽑을 컬럼
 * @returns
 */
export default function pickDollGame(board, moves) {
  let answer = 0;
  const stack = [];
  moves.map((val) => {
    for (let i = 0; i < board.length; i++) {
      let doll = board[i][val - 1];
      if (doll !== 0) {
        stack.push(doll);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
        board[i][val - 1] = 0;
        break;
      }
    }
  });
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
//[1, 2, 3, 4, 5]
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const result = 4;

console.log(pickDollGame(board, moves) === result);
