import yaml from 'js-yaml';

const parse = (fileContent, format) => {
  const parsers = { yml: yaml.load, yaml: yaml.load, json: JSON.parse };
  return parsers[format](fileContent);
};

export default parse;
