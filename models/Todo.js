const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: false,
  },
  subject: {
    type: String,
    required: true
  },
  importantType: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: String,
    required: false
  }
});

module.exports = new mongoose.model("Todo", TodoSchema);
