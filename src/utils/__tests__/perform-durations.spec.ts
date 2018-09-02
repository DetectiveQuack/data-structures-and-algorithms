import { performDurations } from '@detectiveQuack/utils';
import { expect } from 'chai';
import { join } from 'path';
import { SinonSpy, stub } from 'sinon';
import logger from '../logger';

describe('performDurations', () => {
  afterEach(() => {
    (logger.info as SinonSpy).restore();
  });

  it('should log out the durations of the method', () => {
    const loggerSpy = stub(logger, 'info');

    const durations = performDurations(join(__dirname, '../../fibonacci'), [1]);

    expect(loggerSpy.firstCall.args).to.deep.equal(['']);
    expect(loggerSpy.callCount).to.equal(durations.length + 1);
  });

  it('should log out the durations of the method along with the title', () => {
    const loggerSpy = stub(logger, 'info');

    const durations = performDurations(
      join(__dirname, '../../fibonacci'),
      [1],
      'Test'
    );

    expect(loggerSpy.firstCall.args).to.deep.equal(['TEST']);
    expect(loggerSpy.secondCall.args).to.deep.equal(['']);
    expect(loggerSpy.callCount).to.equal(durations.length + 2);
  });

  it('should not log outanything', () => {
    const loggerSpy = stub(logger, 'info');

    performDurations(join(__dirname, '../../fibonacci'), [1], 'Test', false);

    expect(loggerSpy.callCount).to.equal(0);
  });
});
