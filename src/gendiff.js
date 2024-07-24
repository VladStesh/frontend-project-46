import fs from 'fs';
import path from 'path';
import compare from './compares.js';
import parce from './parsers.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileExtension = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = parce(fs.readFileSync(fullFilePath1, 'utf-8'), getFileExtension(fullFilePath1));
  const data2 = parce(fs.readFileSync(fullFilePath2, 'utf-8'), getFileExtension(fullFilePath2));

  return compare(data1, data2);
};

export default genDiff;
