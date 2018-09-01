function recursive(n: number): number {
  if (n === 0 || n === 1) {
    return n;
  }

  return recursive(n - 1) + recursive(n - 2);
}

export default recursive;
