const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SECRET KEY
const JWT_SECRET = "your_jwt_secret_key"; // Move to .env in production

// 🔐 Register
const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ status: "error", message: "Email already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashed, role });

    await user.save();
    res.status(201).json({ status: "success", message: "User registered", data: user });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// 🔓 Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ status: "error", message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ status: "error", message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ status: "success", message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// 🔒 Logout (handled on frontend by clearing token)
const logout = async (req, res) => {
  try {
    res.status(200).json({ status: "success", message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// ❓ Forgot Password (Mock link response)
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ status: "error", message: "User not found" });

    // In real app: Generate reset token + send email
    const resetLink = `http://localhost:3000/reset-password/${user._id}`;
    res.status(200).json({ status: "success", message: "Reset link sent", resetLink });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

// 🔁 Reset Password
const resetPassword = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newPassword } = req.body;

    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(userId, { password: hashed });

    res.status(200).json({ status: "success", message: "Password reset successful" });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword
};
