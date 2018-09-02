import { performDurations } from '@detectiveQuack/utils';
import { expect } from 'chai';
import { join } from 'path';
import iterative from '../iterative';
import memoize from '../memoize';
import recursive from '../recursive';

describe('Fibonacci', () => {
  after(() => {
    performDurations(join(__dirname, '..'), '', [40, 30, 20, 12, 6]);
  });

  it('should return 144 if 12 is passed in', () => {
    expect(recursive(12)).to.equal(144);
    expect(iterative(12)).to.equal(144);
    expect(memoize(12)).to.equal(144);
  });

  it('should have memoize as the fastest and recursive as the slowest', () => {
    const durations = performDurations(
      join(__dirname, '..'),
      '',
      [20, 12, 32, 8],
      false
    );

    expect(durations[0].algorithm).to.equal('memoize');
    expect(durations[durations.length - 1].algorithm).to.equal('recursive');
  });
});
