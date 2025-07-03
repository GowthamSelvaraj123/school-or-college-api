const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rollNumber: String,
  dob: Date,
  phone: String,
  address: String,
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

module.exports = mongoose.model("Student", studentSchema);
