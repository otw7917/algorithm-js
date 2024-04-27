function solution(phone_book) {
  // sort 하는 순간 근사치들끼리 정렬됨 두 숫자끼리 비교해주면 와우
  const sortedBook = phone_book.sort();

  // some 해당 함수 조건에 맞는 경우가 하나라도 있다면
  const answer = sortedBook.some(
    (value, index, self) => self[index + 1]?.indexOf(value) === 0
  );
  return !answer;
}

// test
// const arr = ["12", "1334", "123456", "17345678"];
// const a = arr.sort().some((value, index, self) => {
//   console.log(value, self[index + 1]);
//   return self[index + 1]?.indexOf(value) === 0;
// });
// console.log(a);

// function sol(phone_book) {
//   // 효율성 X
//   const sortedBook = phone_book.sort();
//   for (let i = 0; i < sortedBook.length; i++) {
//     for (let j = i + 1; j < sortedBook.length; j++) {
//       if (sortedBook[j].indexOf(sortedBook[i]) === 0) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
