const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ status: "success", message: "Users fetched", data: users });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ status: "success", message: "User created", data: user });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = { getAllUsers, createUser };
