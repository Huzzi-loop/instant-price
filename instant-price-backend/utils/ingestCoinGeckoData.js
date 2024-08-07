const { cryptoCoins } = require("../constants");
const connectToDatabase = require("../db/conn");
const coinGeckoApi = require("../external/coingecko");
require("dotenv").config();

async function ingestCoinGeckoData() {
  try {
    const coinList = cryptoCoins.map((coin) => coin.id).join(",");

    const db = await connectToDatabase();
    const { data, staus } = await coinGeckoApi.get("/coins/markets", {
      params: {
        ids: coinList,
        vs_currency: "inr",
      },
    });
    let collection = await db.collection(process.env.MONGO_COLLECTION);
    let result = await collection.insertMany(data);
  } catch (err) {
    console.error(err);
    // throw new Error(err);
  }
}

module.exports = ingestCoinGeckoData;
