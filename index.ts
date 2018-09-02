import { performDurations } from '@detectiveQuack/utils';
import { join } from 'path';

/**
 * FOR-VS-WHILE
 *
 * Output the speed of for loops vs while loops
 */
performDurations(join(__dirname, 'src/for-vs-while'), [100000]);
