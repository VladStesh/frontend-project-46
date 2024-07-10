import fs from 'fs';
import path from 'path';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2) => {
  const fullFilePuth1 = getFullPath(filepath1);
  const fullFilePuth2 = getFullPath(filepath2);

  console.log(JSON.parse(fs.readFileSync(fullFilePuth1, 'utf-8')));
  console.log(JSON.parse(fs.readFileSync(fullFilePuth2, 'utf-8')));
};

export default genDiff;
