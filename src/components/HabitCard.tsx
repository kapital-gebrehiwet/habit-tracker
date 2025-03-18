'use client';

import { useState } from 'react';

interface HabitCardProps {
  id: string;
  title: string;
  description?: string;
  category: string;
  frequency: string;
  targetDays: number;
  streak: number;
  longestStreak: number;
  onCheckIn: (id: string, mood: string, notes: string) => void;
  onDelete: (id: string) => void;
  onArchive: (id: string) => void;
}

export default function HabitCard({ 
  id, 
  title, 
  description, 
  category,
  frequency,
  targetDays,
  streak,
  longestStreak,
  onCheckIn,
  onDelete,
  onArchive
}: HabitCardProps) {
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [mood, setMood] = useState('😊');
  const [notes, setNotes] = useState('');

  const handleCheckIn = () => {
    onCheckIn(id, mood, notes);
    setMood('😊');
    setNotes('');
    setShowCheckInModal(false);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Health: 'bg-green-100 text-green-800',
      Productivity: 'bg-blue-100 text-blue-800',
      Learning: 'bg-purple-100 text-purple-800',
      Lifestyle: 'bg-yellow-100 text-yellow-800',
      Other: 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || colors.Other;
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Header Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <span className={`rounded-full px-3 py-1 text-sm font-medium ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        )}
      </div>

      {/* Stats Section */}
      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Frequency</p>
            <p className="text-gray-700 capitalize">{frequency}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Target</p>
            <p className="text-gray-700">{targetDays} days</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Streak</p>
            <p className="text-blue-600 font-bold">{streak}</p>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500 text-right">
          Best streak: {longestStreak} days
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => setShowCheckInModal(true)}
          className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-sm"
        >
          ✓ Check In
        </button>
        <div className="flex gap-2">
          <button
            onClick={() => onArchive(id)}
            className="flex-1 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
          >
            Archive
          </button>
          <button
            onClick={() => onDelete(id)}
            className="flex-1 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Check-in Modal */}
      {showCheckInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-xl bg-white p-6 shadow-xl max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">How are you feeling?</h3>
            <div className="mb-6 flex justify-center gap-4">
              {['😊', '😐', '😔', '😤', '😴'].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setMood(emoji)}
                  className={`text-2xl transform transition-transform duration-200 hover:scale-125 ${
                    mood === emoji ? 'scale-125 bg-gray-100 rounded-full p-2' : 'p-2'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about your progress... (optional)"
              className="w-full rounded-lg border border-gray-200 p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCheckInModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckIn}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-medium shadow-sm"
              >
                Complete Check-in
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 