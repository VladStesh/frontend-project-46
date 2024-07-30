import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFixture = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

const expectedStylishResult = readFixture('result.stylish.txt');
const expectedJSONResult = JSON.parse(readFixture('JSON.result.json'));

describe('genDiff functionality test', () => {
  test('JSON cases', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylishResult);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylishResult);
    expect(JSON.parse(genDiff(filepath1, filepath2, 'json'))).toEqual(expectedJSONResult);
  });

  test('YML and YAML cases', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yaml');

    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylishResult);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylishResult);
    expect(JSON.parse(genDiff(filepath1, filepath2, 'json'))).toEqual(expectedJSONResult);
  });
});
