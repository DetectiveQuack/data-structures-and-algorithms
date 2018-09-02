import { logger } from '@detectiveQuack/utils';
import { expect } from 'chai';
import { LogEntry } from 'winston';

describe('logger', () => {
  it('should log out the durations of the method', (done) => {
    const msg = 'Logger test';

    logger.on('data', (log: LogEntry) => {
      expect(log.message).to.equal(msg);
      done();
    });

    logger.info(msg);
  });
});
