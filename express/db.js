import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connection established");
  } catch (err) {
    console.error("connection error to mongodb: ", err);
  }
};

export default connectDB;
