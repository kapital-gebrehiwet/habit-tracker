import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  streak: { type: Number, default: 0 },
  completedDates: [{ type: Date }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Prevent duplicate model initialization
const Habit = mongoose.models.Habit || mongoose.model('Habit', habitSchema);

export default Habit; 