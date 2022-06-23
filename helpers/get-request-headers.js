const { getApiKey } = require('./get-api-key');

function getRequestHeaders() {
  const apiKey = getApiKey();
  return {
    headers: {
      'api-key': apiKey,
    },
  };
}

module.exports = { getRequestHeaders };
