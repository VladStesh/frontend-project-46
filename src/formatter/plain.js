import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) || Array.isArray(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (value === null) {
    return 'null';
  }
  return String(value);
};

const makePlain = (difference, keyPrefix = '') => {
  const result = difference.reduce((acc, node) => {
    const currentPath = keyPrefix + node.key;

    switch (node.type) {
      case 'unchanged':
        return acc;
      case 'changed': {
        const line = `Property '${currentPath}' was updated. From ${stringify(node.oldValue)} to ${stringify(node.newValue)}`;
        return [...acc, line];
      }
      case 'removed': {
        const line = `Property '${currentPath}' was removed`;
        return [...acc, line];
      }
      case 'added': {
        const line = `Property '${currentPath}' was added with value: ${stringify(node.value)}`;
        return [...acc, line];
      }
      case 'nested': {
        const nestedLines = makePlain(node.value, `${currentPath}.`);
        return [...acc, nestedLines];
      }
      default:
        throw new Error(`Unknown node type: ${node.type}`);
    }
  }, []);

  return result.join('\n');
};

export default makePlain;
