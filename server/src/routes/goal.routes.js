import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

// ===============================
// Add Goal
// POST /api/goals
// ===============================
router.post("/", async (req, res) => {
  try {
    const { userId, title, target, deadline } = req.body;

    if (!userId || !title || !target) {
      return res.status(400).json({
        success: false,
        message: "userId, title and target are required.",
      });
    }

    const goal = await prisma.goal.create({
      data: {
        userId: Number(userId),
        title,
        target: Number(target),
        deadline: deadline ? new Date(deadline) : null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Goal created successfully! 🎯",
      goal,
    });
  } catch (error) {
    console.error("CREATE GOAL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create goal.",
      error: error.message,
    });
  }
});

// ===============================
// Get User's Goals
// GET /api/goals/:userId
// ===============================
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const goals = await prisma.goal.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      goals,
    });
  } catch (error) {
    console.error("GET GOALS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch goals.",
      error: error.message,
    });
  }
});

// ===============================
// Update Goal Progress
// PUT /api/goals/:id
// ===============================
router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { current } = req.body;

    if (current === undefined) {
      return res.status(400).json({
        success: false,
        message: "Current progress is required.",
      });
    }

    // Find existing goal
    const goal = await prisma.goal.findUnique({
      where: {
        id,
      },
    });

    if (!goal) {
      return res.status(404).json({
        success: false,
        message: "Goal not found.",
      });
    }

    const currentProgress = Number(current);

    // Update goal
    const updatedGoal = await prisma.goal.update({
      where: {
        id,
      },
      data: {
        current: currentProgress,
        completed: currentProgress >= goal.target,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Goal updated successfully! 🎯",
      goal: updatedGoal,
    });
  } catch (error) {
    console.error("UPDATE GOAL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to update goal.",
      error: error.message,
    });
  }
});

export default router;