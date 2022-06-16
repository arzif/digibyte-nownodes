require('dotenv').config();

const { NOWNODES_API_KEY } = process.env;

function getRequestHeaders() {
  const apiKey = NOWNODES_API_KEY;
  return {
    headers: {
      'api-key': apiKey,
    },
  };
}

module.exports = { getRequestHeaders };
