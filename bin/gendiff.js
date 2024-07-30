#! /usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/gendiff.js';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .helpOption('-h, --h', 'output usage information')
  .action((filepath1, filepath2, options) => {
    const difference = genDiff(filepath1, filepath2, options.format);
    console.log(difference);
  });

program.parse();
