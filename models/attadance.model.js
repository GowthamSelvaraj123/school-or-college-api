const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  date: Date,
  status: { type: String, enum: ["Present", "Absent", "Leave"] }
});

module.exports = mongoose.model("Attendance", attendanceSchema);
