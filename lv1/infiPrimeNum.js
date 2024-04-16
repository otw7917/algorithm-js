function solution(a, b) {
  // 기약분수
  for (let i = 0; i <= Math.max(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
    }
  }
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }
  return b === 1 ? 1 : 2;
}

// console.log(a,b)
// const 약수 = [];
// for(let i = 0 ; i <= b;i++) {
//     if(b % i === 0) {
//         약수.push(i)
//     }
// }
// console.log(약수)
// // 정수
// if(약수.length === 1 ) return 1;

// 3 7등의 소수가 2또는 5와 있다면 안되네
// if(약수.indexOf(2) == 1 || 약수.indexOf(5) == 1) {
//     return 1
// } else {
//     return 2
// }
