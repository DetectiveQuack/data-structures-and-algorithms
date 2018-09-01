import { readdirSync } from 'fs';

function getFiles(dir: string, excludes: string[] = ['index']) {
  return readdirSync(dir)
    .filter((f) => f !== '__tests__' && !excludes.includes(f.slice(0, -3)))
    .map((f) => `${dir}/${f}`);
}

export default getFiles;
