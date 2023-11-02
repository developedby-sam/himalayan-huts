const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    listingID:{
        type:String,
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
    title: {
      type: String,
      required: true,
      min: 6,
    },
    explanation: {
      type: String,
      required: true,
      default: "",
    },
    price: {
        type: Number,
        required: true,
      },
    noOfRooms: {
        type: Number,
        required: true,
      },
      noOfRooms: {
        type: Number,
        required: true,
      },
      noOfBedRooms: {
        type: Number,
        required: true,
      },
      noOfLivingRooms: {
        type: Number,
        required: true,
      },
      floorArea: {
        type: Number,
        required: true,
        min: 6,
      },
    hideContact: {
        type: Boolean,
        default: false,
    }
    ,contact_info:{
        type:String,
       default:""
    },
      address1: {
        type: String,
        required: true,
      },
      address2: {
        type: Number,
        required: true,
      },
      city: {
        type: Number,
        required: true,
      },
      state: {
        type: Number,
        required: true,
      },
      zipCode: {
        type: Number,
        required: true,
      },
      latitude:{
        type:mongoose.Types.Decimal128
      },
      longitude:{
        type:mongoose.Types.Decimal128
      },
      listingCoverPhoto:{
        type:String,
        required:true
      },
      listingPhotos:{
        type: [String], // An array of strings
        validate: [(val) => Array.isArray(val) && val.length > 0]
      },
      tags:{
        type: [String], // An array of strings
        validate: [(val) => Array.isArray(val) && val.length > 0]
      },
      reviews: [{
        type: [String],
        ref: 'Review'
      }],
      averageRating: {
        type: Number,
        default: 0,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Listing", ListingSchema); 