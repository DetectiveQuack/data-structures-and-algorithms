import { HumanizeDurationLanguage, HumanizeDuration } from 'humanize-duration-ts';

const langService = new HumanizeDurationLanguage();
const humanizer = new HumanizeDuration(langService);

export default humanizer;
