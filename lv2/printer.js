function solution(priorities, location) {
  let answer = 0;
  let move_count = 0;
  let myLocation = location;
  while (true) {
    let comapre_pri = priorities.shift();
    // 꺼냈을때 우선순위가 더 높은게 있으면 그냥 뒤에 넘겨주기
    if (priorities.some((priority) => comapre_pri < priority)) {
      priorities.push(comapre_pri);
    } else {
      move_count++;
      if (myLocation === 0) {
        return (answer = move_count);
      }
    }
    myLocation--;
    if (myLocation < 0) {
      myLocation = priorities.length - 1;
    }
  }
}

solution([2, 1, 3, 2], 2);

// ABCD
// 2132 => 3 !
// CDAB
// location 2 where is C => return 1?

// ABCDEF
// 119111
// CDEFAB
// location 0 where is A => return 5

// solution([2, 1, 3, 2], 2); // return 1
// solution([1, 1, 9, 1, 1, 1], 0);
solution([3, 1, 3, 1], 1);
// 191111
// 911111
