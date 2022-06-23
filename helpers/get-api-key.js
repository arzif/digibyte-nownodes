require('dotenv').config();

const { NOWNODES_API_KEY } = process.env;

function getApiKey() {
  return NOWNODES_API_KEY;
}

module.exports = { getApiKey };
