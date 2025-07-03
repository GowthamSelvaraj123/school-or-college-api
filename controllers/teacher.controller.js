const Teacher = require("../models/teacher.model");

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find().populate("user", "name email");
    res.status(200).json({ status: "success", message: "Teachers fetched", data: teachers });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id).populate("subjects");
    res.status(200).json({ status: "success", message: "Teacher fetched", data: teacher });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json({ status: "success", message: "Teacher created", data: teacher });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const updated = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: "success", message: "Teacher updated", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Teacher deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
};
