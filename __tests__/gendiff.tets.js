import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/gendiff.js';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('СРАВНЕНИЕ ПЛОСКИХ json ФАЙЛОВ', () => {
  const expectedResult = readFile('result.txt');
  const receivedResult = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));

  console.log(receivedResult);
  console.log(expectedResult);

  expect(receivedResult).toBe(expectedResult);
});

