const Class = require("../models/class.model");

const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("classTeacher").populate("students");
    res.status(200).json({ status: "success", message: "Classes fetched", data: classes });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getClassById = async (req, res) => {
  try {
    const classData = await Class.findById(req.params.id).populate("students").populate("classTeacher");
    res.status(200).json({ status: "success", message: "Class fetched", data: classData });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createClass = async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json({ status: "success", message: "Class created", data: newClass });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateClass = async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: "success", message: "Class updated", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Class deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};
