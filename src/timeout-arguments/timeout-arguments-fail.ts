import logger from '../utils/logger';

function timeoutArgumentsFail(n: number) {
  // tslint:disable-next-line no-var-keyword
  for (var i = 0; i <= n; i++) {
    setTimeout(() => {
      logger.info(i.toString());
    }, 0);
  }
}

export default timeoutArgumentsFail;
