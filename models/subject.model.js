const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  code: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
});

module.exports = mongoose.model("Subject", subjectSchema);
