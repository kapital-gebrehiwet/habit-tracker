const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

const MONGODB_URI = "mongodb+srv://kapitalgsoftware1:6NR8BB1jYSDzZCxL@cluster0.r3tsl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      tls: true,
      tlsAllowInvalidCertificates: false,
      retryWrites: true
    });
    
    console.log('Successfully connected to MongoDB!');
    
    // Test database operations
    const db = mongoose.connection.db;
    console.log('Connected to database:', db.databaseName);
    
    const collections = await db.listCollections().toArray();
    console.log('Available collections:', collections.map(c => c.name));
    
    // Ping the database
    await db.admin().ping();
    console.log('Database ping successful!');
    
  } catch (error) {
    console.error('Connection error:', error.message);
    console.error('Full error:', error);
    if (error.code) {
      console.error('Error code:', error.code);
    }
    process.exit(1);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.disconnect();
      console.log('Connection closed');
    }
  }
}

testConnection(); 