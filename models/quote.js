const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  body: String,
  episode: Number,
  season: Number,
  author: String,
  authid: String,
});

module.exports = mongoose.model("Quote", quoteSchema);