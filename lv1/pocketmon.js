/**
 * 포켓몬
 * @param {number[]} nums
 * @returns {number}
 */

export default function pocketmon(nums) {
  let answer = 0;
  const canChoose = nums.length / 2;
  let pocketmonSet = new Set(nums);
  let spiecs = [...pocketmonSet].length;

  // 선택할수 있는 갯수   <=>   있는 종류
  if (canChoose > spiecs) {
    answer = spiecs;
  } else {
    answer = canChoose;
  }
  return answer;
}
