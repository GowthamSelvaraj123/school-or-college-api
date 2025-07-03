const Course = require("../models/course.model");

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("teacher").populate("subjects");
    res.status(200).json({ status: "success", message: "Courses fetched", data: courses });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate("teacher").populate("subjects");
    res.status(200).json({ status: "success", message: "Course fetched", data: course });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json({ status: "success", message: "Course created", data: course });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ status: "success", message: "Course updated", data: updated });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Course deleted" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse
};
