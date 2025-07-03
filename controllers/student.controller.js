const Student = require("../models/student.model");

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("user", "name email").populate("class");
    res.status(200).json({ status: "success", message: "Students fetched", data: students });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("user").populate("class");
    res.status(200).json({ status: "success", message: "Student fetched", data: student });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ status: "success", message: "Student created", data: student });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: "success", message: "Student updated", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
