// k 번째 수

// function kNumber(array, commands) {
//   const answer = [];

//   for (const arr1 of commands) {
//     let temp = array.slice(arr1[0] - 1, arr1[1]).sort((a, b) => {
//       return a - b;
//     });
//     answer.push(temp[arr1[2] - 1]);
//   }
//   return answer;
// }

const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
const array = [1, 5, 2, 6, 3, 7, 4];

kNumber(array, commands);

// object destructing
// map , filter => new array
function solution(array, commands) {
  return commands.map((command) => {
    const [startIndex, endIndex, pickIndex] = command;
    console.log(command);
    const newArray = array
      .filter((value, key) => key >= startIndex - 1 && key <= endIndex - 1)
      .sort((a, b) => a - b);

    return newArray[pickIndex - 1];
  });
}
