function isPrime(n: number) {
  let divideBy = 3;

  if (n === 2 || n === 3) {
    return true;
  } else if (n === 1 || n % 2 === 0) {
    return false;
  }

  while (n > divideBy) {
    if (n % divideBy !== 0) {
      divideBy += 2;
    } else {
      return false;
    }
  }

  return true;
}

export default isPrime;
