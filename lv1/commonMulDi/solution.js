function solution(n, m) {
  let answer = [];
  // 최대공약수, 최소공배수
  if (n % m !== 0 && m % n !== 0) {
    answer.push(gcd(n, m));
    answer.push(lcm(n, m));
  } else {
    answer.push(m);
    answer.push(n);
    answer.sort((a, b) => a - b);
  }
  return answer;
}

function gcd(num1, num2) {
  let gcdnum = 1;
  for (let i = 2; i < Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcdnum = i;
    }
  }
  return gcdnum;
}

function lcm(num1, num2) {
  let lcmnum = 1;
  while (true) {
    if (lcmnum % num1 === 0 && lcmnum % num2 === 0) {
      break;
    }
    lcmnum++;
  }
  return lcmnum;
}

module.exports = solution;
