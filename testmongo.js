const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://kapitalgsoftware1:FHLoIvbKarlcojD2@cluster0.1c8yn.mongodb.net/habittracker?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Connection failed:", error);
    } finally {
        await client.close();
    }
}

run().catch(console.error);