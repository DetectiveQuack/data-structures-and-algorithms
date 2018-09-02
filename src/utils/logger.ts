import { createLogger, format, transports } from 'winston';
const { combine, printf } = format;

const myFormat = printf((info) =>  `  ${info.message}`);

const logger = createLogger({
  format: combine(myFormat),
  transports: [new transports.Console()]
});

export default logger;
