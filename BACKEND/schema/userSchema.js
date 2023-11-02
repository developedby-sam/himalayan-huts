const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
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
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    googleID: String,

    listings:{
        type:Array,
        default:[]
    },
    isLandLord: {
      type: Boolean,
      default: false,
    },
    isRenter: {
        type: Boolean,
        default: false,
      },
    hideContact: {
        type: Boolean,
        default: false,
      }
    ,contact_info:{
        type:String,
        default:""
    }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
      try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
      } catch (err) {
        return next(err);
      }
    } else {
      return next();
    }
  });
  
  UserSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model("User", UserSchema); 