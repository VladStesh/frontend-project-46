import _ from 'lodash';

const indentStep = 1;
const spaceForOperators = 2;
const indentLength = 4;

const makeIndent = (depth, spaceCount = indentLength) => (' '.repeat((depth * spaceCount) - spaceForOperators));

const parseValue = (dataByKey, depth) => {
  if (typeof (dataByKey) !== 'object') {
    return _.toString(dataByKey);
  }
  if (dataByKey === null) {
    return 'null';
  }
  const entries = _.sortBy(Object.entries(dataByKey), ([key]) => key);
  const lines = entries
    .map(([key, value]) => `${makeIndent(depth + indentStep)}  ${key}: ${parseValue(value, depth + indentStep)}`)
    .join('\n');

  return `{\n${lines}\n  ${makeIndent(depth)}}`;
};

const makeLines = (lineSource, depth) => lineSource
  .map((node) => {
    const { key, value } = node;
    switch (node.type) {
      case 'unchanged':
        return `${makeIndent(depth)}  ${key}: ${parseValue(value, depth)}`;
      case 'removed':
        return `${makeIndent(depth)}- ${key}: ${parseValue(value, depth)}`;
      case 'added':
        return `${makeIndent(depth)}+ ${key}: ${parseValue(value, depth)}`;
      case 'changed': {
        const deletedValue = `${makeIndent(depth)}- ${key}: ${parseValue(node.oldValue, depth)}`;
        const addedValue = `${makeIndent(depth)}+ ${key}: ${parseValue(node.newValue, depth)}`;
        return `${deletedValue}\n${addedValue}`;
      }
      case 'nested':
        return `${makeIndent(depth)}  ${key}: {\n${makeLines(value, depth + indentStep).join('\n')}\n${makeIndent(depth)}  }`;
      default:
        throw new Error(`Incorrect node type. ${node.type}`);
    }
  });

const makeStylish = (difference) => `{\n${makeLines(difference, indentStep).join('\n')}\n}`;

export default makeStylish;
