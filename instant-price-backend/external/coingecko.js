const axios = require("axios").default;

const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/simple/price",
});

module.exports = coinGeckoApi;
