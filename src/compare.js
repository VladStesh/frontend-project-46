import _ from 'lodash';

const compare = (data1, data2) => {
  const keysSorted = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const result = keysSorted.map((key) => {
    if (!_.has(data1, key)) {
      return ({ key, type: 'added', value: data2[key] });
    }

    if (!_.has(data2, key)) {
      return ({ key, type: 'removed', value: data1[key] });
    }

    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return ({ key, type: 'nested', value: compare(data1[key], data2[key]) });
    }

    if (data1[key] === data2[key]) {
      return ({ key, type: 'unchanged', value: data1[key] });
    }

    return ({
      key,
      type: 'changed',
      oldValue: data1[key],
      newValue: data2[key],
    });
  });
  return result;
};

export default compare;
