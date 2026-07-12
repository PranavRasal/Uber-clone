import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import dns from "dns";
 dns.setServers(["1.1.1.1","8.8.8.8"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.db_url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;