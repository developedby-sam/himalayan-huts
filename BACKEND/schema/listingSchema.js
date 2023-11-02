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
        type: Int16Array,
        required: true,
      },
    noOfRooms: {
        type: Int16Array,
        required: true,
      },
      noOfRooms: {
        type: Int16Array,
        required: true,
      },
      noOfBedRooms: {
        type: Int16Array,
        required: true,
      },
      noOfLivingRooms: {
        type: Int16Array,
        required: true,
      },
      floorArea: {
        type: Int16Array,
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
        type: Int16Array,
        required: true,
      },
      city: {
        type: Int16Array,
        required: true,
      },
      state: {
        type: Int16Array,
        required: true,
      },
      zipCode: {
        type: Int16Array,
        required: true,
      },
      latitude:{
        type:Float64Array
      },
      longitude:{
        type:Float64Array
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
        type: Schema.Types.ObjectId,
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