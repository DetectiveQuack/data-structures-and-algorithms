function fibonacci(n: number) {
  if (n === 0 || n === 1) {
    return n;
  }

  let total = 0;

  for(let i = 2; i <= n ; i++) {
    total += (i - 1) + (i -2);
  }

  return total;
}

export default fibonacci;
