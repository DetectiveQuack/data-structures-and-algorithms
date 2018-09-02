import logger from '../utils/logger';

function timeoutArgumentsEs5(n: number) {
  // tslint:disable-next-line no-var-keyword
  var fn = (local: number) => {
    return () => { logger.info(local.toString()); };
  };

  // tslint:disable-next-line no-var-keyword
  for (var i = 0; i < n; i++) {
    setTimeout(fn(i), 0);
  }
}

export default timeoutArgumentsEs5;
