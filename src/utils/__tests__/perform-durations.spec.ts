import { performDurations } from '@detectiveQuack/utils';
import { join } from 'path';
import { expect } from 'chai';
import logger from '../logger';
import { spy, SinonSpy } from 'sinon';

describe('performDurations', () => {
  it('should log out the durations of the method', () => {
    const loggerSpy = spy(logger, 'info');

    const durations = performDurations(join(__dirname, '../../fibonacci'), [1]);

    expect(loggerSpy.firstCall.args).to.deep.equal(['']);
    expect(loggerSpy.callCount).to.equal(durations.length + 1);

    (logger.info as SinonSpy).restore();
  });

  it('should log out the durations of the method along with the title', () => {
    const loggerSpy = spy(logger, 'info');

    const durations = performDurations(
      join(__dirname, '../../fibonacci'),
      [1],
      'Test'
    );

    expect(loggerSpy.firstCall.args).to.deep.equal(['TEST']);
    expect(loggerSpy.secondCall.args).to.deep.equal(['']);
    expect(loggerSpy.callCount).to.equal(durations.length + 2);

    (logger.info as SinonSpy).restore();
  });

  it('should not log outanything', () => {
    const loggerSpy = spy(logger, 'info');

    const durations = performDurations(
      join(__dirname, '../../fibonacci'),
      [1],
      'Test',
      false
    );

    expect(loggerSpy.callCount).to.equal(0);

    (logger.info as SinonSpy).restore();
  });
});
