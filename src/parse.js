import { load } from 'js-yaml';

const parse = (format) => {
  switch (format) {
    case 'json':
      return JSON.parse;
    case 'yaml':
    case 'yml':
      return load;
    default:
      throw new Error(`Unknown data format '.${format}'. Use 'gendiff - h' for supported file format info.`);
  }
};

export default ((data, format) => parse(format)(data));
