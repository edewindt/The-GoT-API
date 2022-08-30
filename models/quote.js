const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  body: String,
  episode: Number,
  season: Number,
  authid: String,
});

module.exports = mongoose.model("Quote", quoteSchema);
