const rawData = require('./input.csv');
const fs = require('fs');

const handleData = (rawData) => {
  const json = {};
  // faz mil coisas
  return json;
}

fs.writeFile('output.json', handleData(), 'utf8');
