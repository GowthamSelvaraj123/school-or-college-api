const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: String, // e.g., "10-A"
  section: String,
  classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }]
});

module.exports = mongoose.model("Class", classSchema);
