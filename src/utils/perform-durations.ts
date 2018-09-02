import now = require('performance-now');
import { getFiles, humanize, logger } from '@detectiveQuack/utils';

function performDurations(
  dir: string,
  timings: number[],
  title = '',
  log = true
) {
  const files = getFiles(dir);

  if (title && log) {
    logger.info(title.toUpperCase());
  }

  const durations = files.map((f) => {
    const algorithm = require(f).default;

    const start = now();
    timings.forEach((t) => {
      algorithm(t);
    });
    const end = now();

    return {
      duration: start - end,
      algorithm: algorithm.name
    };
  });

  const sorted = durations.sort((a, b) => b.duration - a.duration);

  if (log) {
    logger.info(''); // add spacing before log
    sorted.forEach((timings) => {
      logger.info(
        `${timings.algorithm}: ${humanize.humanize(timings.duration)}`
      );
    });
  }

  return sorted;
}

export default performDurations;
