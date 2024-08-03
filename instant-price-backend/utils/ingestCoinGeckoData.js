const coinGeckoApi = require("../external/coingecko");

async function ingestCoinGeckoData() {
  try {
    const response = await coinGeckoApi.get();

    return response.data;
  } catch (err) {
    console.error(err);
    // throw new Error(err);
  }
}

module.exports = ingestCoinGeckoData;
