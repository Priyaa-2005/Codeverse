import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

// Analytics for a user
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const problems = await prisma.problem.findMany({
      where: { userId },
      orderBy: {
        solvedAt: "asc",
      },
    });

    // Total problems
    const totalProblems = problems.length;

    // Difficulty statistics
    const difficultyCounts = {
      Easy: 0,
      Medium: 0,
      Hard: 0,
    };

    problems.forEach((problem) => {
      if (problem.difficulty) {
        if (difficultyCounts[problem.difficulty] !== undefined) {
          difficultyCounts[problem.difficulty]++;
        }
      }
    });

    // Platform statistics
    const platformCounts = {};

    problems.forEach((problem) => {
      if (platformCounts[problem.platform]) {
        platformCounts[problem.platform]++;
      } else {
        platformCounts[problem.platform] = 1;
      }
    });

    // Topic statistics
    const topicCounts = {};

    problems.forEach((problem) => {
      const topic = problem.topic || "Other";

      if (topicCounts[topic]) {
        topicCounts[topic]++;
      } else {
        topicCounts[topic] = 1;
      }
    });

    // Problems solved by date
    const dailyCounts = {};

    problems.forEach((problem) => {
      const date = new Date(problem.solvedAt)
        .toISOString()
        .split("T")[0];

      if (dailyCounts[date]) {
        dailyCounts[date]++;
      } else {
        dailyCounts[date] = 1;
      }
    });

    const dailyActivity = Object.entries(dailyCounts).map(
      ([date, count]) => ({
        date,
        count,
      })
    );

    return res.json({
      success: true,
      totalProblems,
      difficultyCounts,
      platformCounts,
      topicCounts,
      dailyActivity,
    });
  } catch (error) {
    console.error("ANALYTICS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch analytics.",
    });
  }
});

export default router;