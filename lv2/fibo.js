/**
 * 피보나치 수
 * @param {number} n
 * @returns
 */
export default function fibo(n) {
  const fibo = (n) => {
    let f = new Array(n + 1).fill(0);
    f[0] = 0;
    f[1] = 1;
    let i = 2;
    while (i <= n) {
      f[i] = (parseInt(f[i - 1]) + parseInt(f[i - 2])) % 1234567;
      i++;
    }
    return f[n];
  };

  return fibo(n);
}

/* export default function fiboo(n) {
  let answer = 0;

  const fibo = (n) => {
    if (n <= 2) return 1;
    return (fibo(n - 1) + fibo(n - 2)) % 1234567;
  };

  answer = fibo % 1234567;
  return answer;
} */
