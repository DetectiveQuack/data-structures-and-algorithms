import now = require('performance-now');
import { logger, getFiles, humanize } from '@detectiveQuack/utils';

function performDurations(dir: string, title: string, timings: number[] = [], log = true) {
  const files = getFiles(dir);

  logger.info(title.toUpperCase());

  const durations = files.map(f => {
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
    sorted.forEach((timings) => {
      logger.info(`${timings.algorithm}: ${humanize.humanize(timings.duration)}`);
    });
  }

  return sorted;
}

export default performDurations;
