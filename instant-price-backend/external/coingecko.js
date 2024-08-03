const axios = require("axios").default;
require("dotenv").config();

const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;
const coinGeckoApi = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-cg-demo-api-key": COINGECKO_API_KEY,
  },
});

module.exports = coinGeckoApi;
