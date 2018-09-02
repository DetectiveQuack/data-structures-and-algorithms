import { logger } from '@detectiveQuack/utils';

function timeoutArgumentsEs6(n: number) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      logger.info(i.toString());
    }, 0);
  }
}

export default timeoutArgumentsEs6;
