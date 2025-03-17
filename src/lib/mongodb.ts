import mongoose from 'mongoose';

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  if (cached.conn) {
    console.log('Using existing MongoDB connection');
    return cached.conn;
  }

  console.log('Creating new MongoDB connection...');

  try {
    const opts = {
      bufferCommands: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      directConnection: false
    };

    const conn = await mongoose.connect(MONGODB_URI, opts);
    console.log('Successfully connected to MongoDB');
    cached.conn = conn;
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error instanceof Error ? error.message : error);
    cached.promise = null;
    throw error;
  }
}

export default connectDB; 