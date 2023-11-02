const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    listingID:{
        type:Schema.Types.ObjectId,
        required:true
    },
    username: {
      type: String,
      require: true,
      min: 4,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
      },
      review: {
        type: String,
        required: true,
      }
    }
);

module.exports = mongoose.model("Listing", ReviewSchema); 