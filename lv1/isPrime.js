function solution(n) {
  if (n < 2) return;
  let prime = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  console.log(prime);
  return prime.length;
}

// 내가 짠거..
function isPrime(num) {
  let arr = [];
  for (let j = 1; j <= num; j++) {
    if (num % j === 0) {
      arr.push(j);
    }
  }
  if (arr.length > 2) return;
  if (arr.length == 2) {
    return true;
  } else {
    return false;
  }
}
// 제곱근 이용하기 => 반만 확인해도 소수인지 확인 가능 아주 좋아
function isPrimeRoot(num) {
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (n % i == 0) {
      return false;
    }
    return true;
  }
}

// 에라토스테네스의 체 알고리즘 // O(NlogN)
function isPrimeA(n) {
  const prime = {};
  for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (prime[n]) {
      break;
    }
    if (prime[i]) continue;
    for (let j = i ** 2; j <= n; j += i) {
      prime[j] = true;
    }
  }
  return !prime[n];
}

function isPrimeB(n) {}
