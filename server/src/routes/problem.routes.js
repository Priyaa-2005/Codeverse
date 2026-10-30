import express from "express";
import prisma from "../config/prisma.js";

const router = express.Router();

// ===============================
// ADD SOLVED PROBLEM
// ===============================
router.post("/", async (req, res) => {
  try {
    const {
      userId,
      title,
      platform,
      difficulty,
      topic,
    } = req.body;

    if (!userId || !title || !platform) {
      return res.status(400).json({
        success: false,
        message: "userId, title and platform are required.",
      });
    }

    const problem = await prisma.problem.create({
      data: {
        userId: Number(userId),
        title,
        platform,
        difficulty: difficulty || null,
        topic: topic || null,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Problem added successfully! 🎉",
      problem,
    });
  } catch (error) {
    console.error("ADD PROBLEM ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to add problem.",
      error: error.message,
    });
  }
});

// ===============================
// GET USER PROBLEMS
// ===============================
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const problems = await prisma.problem.findMany({
      where: {
        userId,
      },
      orderBy: {
        solvedAt: "desc",
      },
    });

    return res.status(200).json({
      success: true,
      problems,
    });
  } catch (error) {
    console.error("GET PROBLEMS ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch problems.",
      error: error.message,
    });
  }
});

export default router;