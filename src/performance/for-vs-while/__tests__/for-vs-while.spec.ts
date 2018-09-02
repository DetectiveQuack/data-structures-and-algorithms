import { expect } from 'chai';
import forLoopDecrease from '../for-decrease';
import forLoopIncrease from '../for-increase';
import whileLoopDecrease from '../while-decrease';
import whileLoopIncrease from '../while-increase';

describe('for vs while', () => {
  it('should perform a succesful loop', () => {
    expect(forLoopDecrease(100)).to.be.undefined;
    expect(forLoopIncrease(100)).to.be.undefined;
    expect(whileLoopDecrease(100)).to.be.undefined;
    expect(whileLoopIncrease(100)).to.be.undefined;
  });
});
