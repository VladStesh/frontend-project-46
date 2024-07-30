import makeStylish from './stylish.js';

const makeFormatted = (difference, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(difference);
    case 'json':
      return JSON.stringify(difference);

    default: throw new Error(`Unknown style option.
      Available options: "stylish", "json". More info: gendiff -h`);
  }
};
export default makeFormatted;
