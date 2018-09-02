const cache: { [key: number]: number } = {};

function memoize(n: number): number {
  if (n in cache) {
    return cache[n];
  }

  if (n === 0 || n === 1) {
    cache[n] = n;
    return cache[n];
  }

  cache[n] = memoize(n - 1) + memoize(n - 2);

  return cache[n];
}

export default memoize;
