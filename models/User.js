const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true,
    unique: true
  },
  user_phone: {
    type: Int,
    required: true
  },
  user_role: {
    type: String,
    required: true
  },
  user_dob: {
    type: date,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  user_venues: {
    type: [Int],
    required: true
  },
  user_events: {
    type: [Int],
    required: true
  },
  user_artists: {
    type: [Int],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
