const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const cors = require("cors");
const ingestCoinGeckoData = require("./utils/ingestCoinGeckoData");

require("dotenv").config();

const PORT = process.env.PORT || 3000;
const cryptoRoutes = require("./routes/crypto");
const connectToDatabase = require("./db/conn");

app.use(cors());
app.use(express.json());

app.use(cryptoRoutes);

app.get("/status", (req, res) => {
  res.send("Hello API!");
});

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins, for development only
  },
});

//Socket code to send data of a crypto currency to the client
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  let interval;

  socket.on("getCryptoData", (cryptoData) => {
    console.log("Received data from client:", cryptoData);

    // Start emitting data to the client every 2 seconds
    interval = setInterval(async () => {
      const db = await connectToDatabase();
      let collection = await db.collection("coindex");

      const records = await collection
        .find({ id: cryptoData.id })
        .sort({ last_updated: -1 })
        .limit(20)
        .toArray();

      const data = Array.isArray(records) ? records : Array.from(records);
      socket.emit("data", data);
    }, 2500);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
    clearInterval(interval); // Clear the interval when the user disconnects
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  setInterval(() => {
    console.log("I am alive");
    ingestCoinGeckoData();
  }, 5000);
});
