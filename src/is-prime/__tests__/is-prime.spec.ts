import { expect } from 'chai';
import isPrime from '../is-prime';
import { performDurations } from '@detectiveQuack/utils';
import { join } from 'path';

describe('isPrime', () => {
  after(() => {
    // prettier-ignore
    performDurations(join(__dirname, '..'), [1000000]);
  });

  it('should return truthy for prime numbers', () => {
    // prettier-ignore
    const primeNumbers = [
      2, 3, 5, 7, 11, 13,
      17, 19, 23, 29, 31,
      37, 41, 43, 47, 53,
      59, 61, 67, 71, 73,
      79, 83, 89, 97, 101,
      103, 107, 109, 113,
      127, 131, 137, 139,
      149, 151, 157, 163,
      167, 173, 179, 181,
      191, 193, 197, 199
    ];

    primeNumbers.forEach((pn) => {
      expect(isPrime(pn)).to.be.true;
    });
  });

  it('should return falsey for non prime numbers', () => {
    // prettier-ignore
    const primeNumbers = [
      1, 4, 6, 8, 9, 10,
      12, 14, 15, 16, 18,
      20, 21, 22, 24, 25,
      26, 27, 28, 30, 32,
      33, 34, 35, 36, 38,
      39, 40, 42, 44, 45,
      46, 48, 49, 50, 51,
      52, 54, 55, 56, 57
    ];

    primeNumbers.forEach((pn) => {
      expect(isPrime(pn)).to.be.false;
    });
  });

  it('should return falsey for 0', () => {
    expect(isPrime(0)).to.be.false;
  });
});
