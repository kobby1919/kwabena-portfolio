import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  const { name, company, content } = req.body;

  if (!name || !company || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const review = new Review({ name, company, content });
    const saved = await review.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to save review" });
  }
});

export default router;
