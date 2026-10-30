import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

// ===============================
// Dashboard Data
// GET /api/dashboard/:userId
// ===============================
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    // Get solved problems
    const problems = await prisma.problem.findMany({
      where: { userId },
    });

    // Total problems
    const totalProblems = problems.length;

    // Platform-wise problem count
    const platformCounts = {};

    problems.forEach((problem) => {
      if (platformCounts[problem.platform]) {
        platformCounts[problem.platform]++;
      } else {
        platformCounts[problem.platform] = 1;
      }
    });

    // Get latest goal
    const goal = await prisma.goal.findFirst({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    // Weekly goal data
    let weeklyGoal = null;

    if (goal) {
      const progress = Math.min(
        Math.round((goal.current / goal.target) * 100),
        100
      );

      weeklyGoal = {
        id: goal.id,
        title: goal.title,
        current: goal.current,
        target: goal.target,
        progress,
        completed: goal.completed,
        deadline: goal.deadline,
      };
    }

    return res.json({
      success: true,
      totalProblems,
      platformCounts,
      weeklyGoal,
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data.",
    });
  }
});

// ===============================
// Current Streak
// GET /api/dashboard/:userId/streak
// ===============================
router.get("/:userId/streak", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const problems = await prisma.problem.findMany({
      where: { userId },
      orderBy: { solvedAt: "desc" },
      select: {
        solvedAt: true,
      },
    });

    if (problems.length === 0) {
      return res.json({
        success: true,
        currentStreak: 0,
      });
    }

    const solvedDates = [
      ...new Set(
        problems.map((problem) =>
          new Date(problem.solvedAt).toISOString().split("T")[0]
        )
      ),
    ];

    let streak = 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < solvedDates.length; i++) {
      const expectedDate = new Date(today);

      expectedDate.setDate(today.getDate() - i);

      const expectedDateString = expectedDate
        .toISOString()
        .split("T")[0];

      if (solvedDates.includes(expectedDateString)) {
        streak++;
      } else {
        break;
      }
    }

    return res.json({
      success: true,
      currentStreak: streak,
    });
  } catch (error) {
    console.error("STREAK ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to calculate streak.",
    });
  }
});

export default router;