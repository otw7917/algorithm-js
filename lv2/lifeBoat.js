/**
 *
 * @param {number[]} people
 * @param {number} limit
 * @returns
 */

function lifeBoat(people, limit) {
  let count = 0;
  let i = 0;
  let j = people.length - 1;
  const sortedPeople = people.sort((a, b) => b - a);

  while (i <= j) {
    count++;
    if (sortedPeople[i] + sortedPeople[j] <= limit) i++;
    j--;
  }

  return count;
}
