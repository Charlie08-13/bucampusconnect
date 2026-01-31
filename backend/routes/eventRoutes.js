import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// GET all events OR events by club
router.get("/", async (req, res) => {
  try {
    const { clubId } = req.query;

    const events = clubId
      ? await Event.find({ clubId })
      : await Event.find();

    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new event
router.post("/", async (req, res) => {
  try {
    const event = new Event(req.body);
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
