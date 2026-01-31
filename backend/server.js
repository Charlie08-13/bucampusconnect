import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import clubRoutes from "./routes/clubRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/clubs", clubRoutes);
app.use("/api/events", eventRoutes);

// ✅ Health check (IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = 5000;

// ✅ START SERVER FIRST (CRITICAL)
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// ✅ MongoDB (do NOT stop server if Mongo fails)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) =>
    console.log("❌ MongoDB connection error:", err.message)
  );
