const Subject = require("../models/subject.model");

const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("course").populate("teacher");
    res.status(200).json({ status: "success", message: "Subjects fetched", data: subjects });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id).populate("course").populate("teacher");
    res.status(200).json({ status: "success", message: "Subject fetched", data: subject });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.status(201).json({ status: "success", message: "Subject created", data: subject });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateSubject = async (req, res) => {
  try {
    const updated = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: "success", message: "Subject updated", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Subject deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject
};
