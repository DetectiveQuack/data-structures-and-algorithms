import { expect } from 'chai';
import primeFactors from '../prime-factors';

describe('primeFactors', () => {
  it('should return the prime factors of 69', () => {
    expect(primeFactors(69)).to.be.deep.equal([3, 23]);
  });

  it('should return the prime factors of 48', () => {
    expect(primeFactors(48)).to.be.deep.equal([2, 2, 2, 2, 3]);
  });

  it('should return the prime factors of 123', () => {
    expect(primeFactors(123)).to.be.deep.equal([3, 41]);
  });

  it('should return the prime factors of 317', () => {
    expect(primeFactors(317)).to.be.deep.equal([317]);
  });

  it('should return empty if 1 or lower is passed in', () => {
    expect(primeFactors(0)).to.be.deep.equal([]);
    expect(primeFactors(1)).to.be.deep.equal([]);
  });
});
