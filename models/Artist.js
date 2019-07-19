const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  artist_genre: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Artist = mongoose.model("artist", UserSchema);
