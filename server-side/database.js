import mongoose from "mongoose";

const connectMongoDb = () => {
  mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected!!");
};

export default connectMongoDb;
