const { readJsonData } = require('./index');

function getSiteData(dataDirectory = undefined) {
  return readJsonData('site.json', dataDirectory);
}

module.exports = { getSiteData };