const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }
});

module.exports = mongoose.model("Course", courseSchema);
