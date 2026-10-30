import express from "express";
import cors from "cors";
import prisma from "./config/prisma.js";

import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import goalRoutes from "./routes/goal.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/analytics", analyticsRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "CodeVerse API is running 🚀",
  });
});


// Test API route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Hello from CodeVerse backend! 🚀",
  });
});


// Database test route
app.get("/api/db-test", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json({
      success: true,
      message: "Database connection is working! 🚀",
      users,
    });
  } catch (error) {
    console.error("Database error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed ❌",
    });
  }
});



export default app;