const { Schema, model } = require("mongoose");

const ChatSchema = Schema({
  msg: String,
  value: Number,
});

module.exports = model("Chat", ChatSchema);
