import fs from 'fs';
import path from 'path';
import compare from './compares.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2) => {
  const fullFilePuth1 = getFullPath(filepath1);
  const fullFilePuth2 = getFullPath(filepath2);

  const data1 = JSON.parse(fs.readFileSync(fullFilePuth1, 'utf-8'));
  const data2 = JSON.parse(fs.readFileSync(fullFilePuth2, 'utf-8'));

  console.log(compare(data1, data2));
};

export default genDiff;
