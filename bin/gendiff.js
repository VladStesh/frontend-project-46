#! /usr/bin/env node

import { program } from 'commander';
import getDiff from '../src/gendiff.js';

program
  .name('gendiff')
  .description(' Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(getDiff);

program.parse();
