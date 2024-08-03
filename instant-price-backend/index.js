const express = require("express");
const cors = require("cors");
const ingestCoinGeckoData = require("./utils/ingestCoinGeckoData");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const cryptoRoutes = require("./routes/crypto");

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/auth", authRoutes);
app.use(cryptoRoutes);

app.get("/status", (req, res) => {
  res.send("Hello API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  setInterval(() => {
    console.log("I am alive");
    ingestCoinGeckoData();
  }, 5000);
});
