import express from "express";
import Club from "../models/Club.js";

const router = express.Router();

// GET all clubs
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new club
router.post("/", async (req, res) => {
  try {
    const club = new Club(req.body);
    const savedClub = await club.save();
    res.status(201).json(savedClub);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
