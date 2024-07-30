import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value) || Array.isArray(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${(value)}'`;
  }
  return value;
};

const makePlain = (difference, keyPrefix = '') => {
  const result = difference.reduce((acc, node) => {
    switch (node.type) {
      case 'unchanged':
        return acc;
      case 'changed': {
        const line = (`Property '${keyPrefix.concat(node.key)}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`);
        return ([...acc, line]);
      }
      case 'removed': {
        const line = `Property '${keyPrefix.concat(node.key)}' was removed`;
        return ([...acc, line]);
      }
      case 'added': {
        const line = `Property '${keyPrefix.concat(node.key)}' was added with value: ${stringify(node.value)}`;
        return ([...acc, line]);
      }
      case 'nested': {
        const line = makePlain(node.value, keyPrefix.concat(node.key, '.'));
        return ([...acc, line]);
      }
      default:
        throw new Error(`Unknown node type. ${node.type}`);
    }
  }, []);
  return result.join('\n');
};

export default makePlain;
