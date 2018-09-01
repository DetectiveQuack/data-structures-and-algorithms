const cache: { [key: number]: number } = {};

function fibonacci(n: number): number {
  if (n in cache) {
    return cache[n];
  }

  if (n === 0 || n === 1) {
    cache[n] = n;
    return cache[n];
  }

  cache[n] = fibonacci(n - 1) + fibonacci(n - 2);

  return cache[n];
};

export default fibonacci;
