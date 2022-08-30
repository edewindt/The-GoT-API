const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const familySchema = new Schema({
  house: String,
  region: String,
  sigil: String,
  blazon: String,
  seat: String,
  words:String,
  origin: String,
  notes: String
});

module.exports = mongoose.model("Family", familySchema);