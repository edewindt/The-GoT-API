const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  image: String,
  gif: String,
  poster: String,
  wallpaper: String,
  art: String,
  authid: String,
});

module.exports = mongoose.model("Media", mediaSchema);
