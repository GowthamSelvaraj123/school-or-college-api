const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam" },
  marksObtained: Number
});

module.exports = mongoose.model("Mark", markSchema);
