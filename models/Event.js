const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  event_name: {
    type: String,
    required: true
  },
  num_attended: {
    type: int
  },
  num_not_attended: {
    type: int
  },
  event_user_list: {
    type: [int]
  },
  event_guest_list: {
    type: [int]
  },
  event_date: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Event = mongoose.model("event", UserSchema);
