const mongoose = require("mongoose");

const EventguestSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  phone_number: {
    type: String
  },
  company: {
    type: String
  },
  events_added_to: {
    type: [int]
  },
  venues_attended: {
    type: [int]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Eventguest = mongoose.model("eventguest", EventguestSchema);
