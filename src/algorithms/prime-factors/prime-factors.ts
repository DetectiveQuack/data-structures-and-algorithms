function primeFactors(n: number): number[] {
  let factor = n;
  let divideBy = 2;

  const factors = [];

  while (factor > 2) {
    if ((factor % divideBy) === 0) {
      factors.push(divideBy);
      factor /= divideBy;
    } else {
      divideBy += 1;
    }
  }

  return factors;
}

export default primeFactors;
