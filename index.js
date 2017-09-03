const fs = require('fs')

function readCountries (fileName, stringFormat) {
  return JSON.parse(fs.readFileSync(fileName, stringFormat))
}

function getLanguages(stringFormat) {
  stringFormat = stringFormat ? stringFormat : 'utf8'
  const countries = readCountries('countries.json', stringFormat)
  return countries
}

module.exports = { getLanguages }