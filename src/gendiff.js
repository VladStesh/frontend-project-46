import { readFileSync } from 'fs';
import { resolve, extname } from 'path';
import { cwd } from 'process';
import parse from './parse.js';
import compare from './compare.js';
import makeFormatted from './formatter/formatter.js';

const getContent = (path) => readFileSync(resolve(cwd(), path));
const getFileType = (path) => extname(path).slice(1);

const defoultFormat = 'stylish';

const genDiff = (filepath1, filepath2, formatName = defoultFormat) => {
  const data1 = parse(getContent(filepath1), getFileType(filepath1));
  const data2 = parse(getContent(filepath2), getFileType(filepath2));

  const difference = compare(data1, data2);
  const formattedResult = makeFormatted(difference, formatName);
  return formattedResult;
};

export default genDiff;
