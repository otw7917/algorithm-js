/**
 * count p,y then compare
 * @param {string} s given words, less than 50
 * @returns {boolean}
 */

function findPY(s) {
  const countP = s
    .toLowerCase()
    .split("")
    .filter((value) => value === "p").length;
  const countY = s
    .toLowerCase()
    .split("")
    .filter((value) => value === "y").length;

  if (countP === countY || (countP === 0 && countY === 0)) {
    return true;
  } else {
    return false;
  }
}

function findPY1(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}

const s1 = "pPooyY";
const r1 = true;

findPY1(s1) === r1 ? console.log("good!") : console.log("wrong");
