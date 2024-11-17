// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err;
    }

    // Task 2: Connect to database giftDB and store in variable dbInstance
    dbInstance = client.db(dbName);
    console.log(`Connected to database: ${dbName}`);


    // Task 3: Return database instance
    return dbInstance;
}

module.exports = connectToDatabase;
