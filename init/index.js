// index.js
import mongoose from "mongoose";
import initData from "./data.js";
import Listing from "./Models/listing.js";


const MONGO_URL = "mongodb://127.0.0.1:27017/animal";

const main = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");

    await initDB();
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    mongoose.connection.close();
  }
};

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
  } catch (err) {
    console.error("Init error:", err);
  }
};

main();
 