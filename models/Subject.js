const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subjectKey: {
    type: String,
    required: false
  },
  subject: {
    type: String,
    required: false
  },
  grade: {
      type: Number,
      required: false
  },
  goalGrade: {
      type: Number,
      required: false
  },
  passed:{
      type: Boolean,
      required: false
  }
});

module.exports = new mongoose.model("Subject", SubjectSchema);
