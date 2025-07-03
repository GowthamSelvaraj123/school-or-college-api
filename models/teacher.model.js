const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  qualification: String,
  phone: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }]
});

module.exports = mongoose.model("Teacher", teacherSchema);
