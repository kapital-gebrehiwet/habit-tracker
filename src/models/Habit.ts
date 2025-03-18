import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { 
    type: String, 
    enum: ['Health', 'Productivity', 'Learning', 'Lifestyle', 'Other'],
    default: 'Other'
  },
  frequency: { 
    type: String, 
    enum: ['daily', 'weekly', 'monthly'],
    default: 'daily'
  },
  targetDays: { type: Number, default: 1 }, // Number of days per week/month to complete
  reminderTime: { type: String }, // HH:mm format
  streak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  completedDates: [{ 
    date: { type: Date },
    notes: { type: String },
    mood: { 
      type: String, 
      enum: ['😊', '😐', '😔', '😤', '😴'],
      default: '😊'
    }
  }],
  isArchived: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Update the updatedAt timestamp before saving
habitSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

// Prevent duplicate model initialization
const Habit = mongoose.models.Habit || mongoose.model('Habit', habitSchema);

export default Habit; 