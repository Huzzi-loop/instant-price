const { MongoClient } = require("mongodb");
require("dotenv").config();

const connectionString = process.env.MONGODB_URL;
const client = new MongoClient(connectionString);

let db;

async function connectToDatabase() {
  if (db) {
    return db; // If db is already initialized, return it.
  }

  try {
    const conn = await client.connect();
    db = conn.db("fomo");
    console.log("Database connected successfully");
    return db;
  } catch (e) {
    console.error("Failed to connect to the database", e);
    throw e; // Rethrow the error after logging it.
  }
}

module.exports = connectToDatabase;
