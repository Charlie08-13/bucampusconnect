import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  clubId: { type: String, required: true }, // 🔥 link to club
  image: { type: String }, // optional
});

const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
