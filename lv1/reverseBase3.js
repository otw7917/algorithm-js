/**
 *
 * @param {number} num
 * @returns
 */

function reverseBase3(num) {
  let to3 = num.toString(3).split("");
  let reversed = to3.reverse().join("");
  let result = Number.parseInt(reversed, 3);
  return result;
}

console.log(reverseBase3(45) === 7);
