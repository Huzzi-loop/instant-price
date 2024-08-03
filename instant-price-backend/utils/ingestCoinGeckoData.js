const connectToDatabase = require("../db/conn");
const coinGeckoApi = require("../external/coingecko");

const cryptoCoins = [
  {
    name: "Bitcoin",
    id: "bitcoin",
    symbol: "btc",
  },
  {
    name: "Ethereum",
    id: "ethereum",
    symbol: "eth",
  },
  {
    name: "binancecoin",
    id: "binancecoin",
    symbol: "bnb",
  },
  {
    name: "Dogecoin",
    id: "dogecoin",
    symbol: "doge",
  },
  {
    name: "Shiba Inu",
    id: "shiba-inu",
    symbol: "shib",
  },
];

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
    let collection = await db.collection("coindex");
    let result = await collection.insertMany(data);

    console.log(result);
  } catch (err) {
    console.error(err);
    // throw new Error(err);
  }
}

module.exports = ingestCoinGeckoData;
