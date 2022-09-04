const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  username: String,
  body: String,
  contact: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
