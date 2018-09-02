import { logger } from '@detectiveQuack/utils';
import { expect } from 'chai';
import { SinonSpy, stub } from 'sinon';
import timeoutArgumentsEs5 from '../timeout-arguments-es5';
import timeoutArgumentsEs6 from '../timeout-arguments-es6';
import timeoutArgumentsFail from '../timeout-arguments-fail';

describe('timeoutArguments', () => {
  afterEach(() => {
    (logger.info as SinonSpy).restore();
  });

  it('should fail to log incremental values', (done) => {
    const loggerSpy = stub(logger, 'info');
    const n = 5;

    timeoutArgumentsFail(n);

    setTimeout(() => {
      expect(loggerSpy.callCount).to.equal(n + 1);

      const calls = loggerSpy.getCalls();

      calls.forEach((c) => {
        expect(c.args).to.deep.equal([(n + 1).toString()]);
      });

      done();
    }, 10);
  });

  it('should correctly log incremental values', (done) => {
    const loggerSpy = stub(logger, 'info');
    const n = 5;

    timeoutArgumentsEs5(n);

    setTimeout(() => {
      expect(loggerSpy.callCount).to.equal(n);

      const calls = loggerSpy.getCalls();

      calls.forEach((c, idx) => {
        expect(c.args).to.deep.equal([idx.toString()]);
      });

      done();
    }, 10);
  });

  it('should correctly log incremental values', (done) => {
    const loggerSpy = stub(logger, 'info');
    const n = 5;

    timeoutArgumentsEs6(n);

    setTimeout(() => {
      expect(loggerSpy.callCount).to.equal(n);

      const calls = loggerSpy.getCalls();

      calls.forEach((c, idx) => {
        expect(c.args).to.deep.equal([idx.toString()]);
      });

      done();
    }, 10);
  });
});
