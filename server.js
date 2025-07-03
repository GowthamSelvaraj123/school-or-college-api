const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Route Imports
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const studentRoutes = require("./routes/student.routes");
const teacherRoutes = require("./routes/teacher.routes");
const classRoutes = require("./routes/class.routes");
const courseRoutes = require("./routes/course.routes");
const subjectRoutes = require("./routes/subject.routes");

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/subjects", subjectRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
