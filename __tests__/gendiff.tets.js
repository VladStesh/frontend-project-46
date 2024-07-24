import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('СРАВНЕНИЕ ПЛОСКИХ json ФАЙЛОВ', () => {
  const expectedResult = readFile('result.txt');
  const receivedResult = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));

  expect(receivedResult).toBe(expectedResult);
});

test('СРАВНЕНИЕ ПЛОСКИХ yaml ФАЙЛОВ', () => {
  const expectedResult = readFile('result.txt');
  const receivedResult = genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'));

  expect(receivedResult).toBe(expectedResult);
});
