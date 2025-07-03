const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  name: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  date: Date,
  maxMarks: Number
});

module.exports = mongoose.model("Exam", examSchema);
