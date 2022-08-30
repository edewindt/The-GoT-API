const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  firstname: String,
  lastname: String,
  fullname: String,
  title: String,
  familyid:String,
});

module.exports = mongoose.model("Character",characterSchema);