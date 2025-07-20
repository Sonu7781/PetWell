// listing.js
import cors from "cors";
app.use(cors());

import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: {
    filename: String,
    url: String,
  },
});

const Listing = mongoose.model("Listing", listingSchema);
export default Listing;
