import _ from 'lodash';

const compare = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keysSorted = _.sortBy(_.union(keys1, keys2));

  let result = '';

  keysSorted.forEach((key) => {
    // if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
    //   return { key, type: 'nested', children: compare(data1[key], data2[key]) };
    // }
    if (!Object.hasOwn(data1, key)) {
      result += `+ ${key}: ${data2[key]}\n`;

      return;
    }

    if (!Object.hasOwn(data2, key)) {
      result += `- ${key}: ${data1[key]}\n`;

      return;
    }

    if (!_.isEqual(data1[key], data2[key])) {
      result += `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}\n`;

      return;
    }

    result += `  ${key}: ${data1[key]}\n`;
  });

  return result;
};

export default compare;
