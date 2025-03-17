'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface Habit {
  _id: string;
  title: string;
  description: string;
  frequency: string;
  streak: number;
  completedDates: Date[];
}

export default function HabitTracker() {
  const { data: session } = useSession();
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newHabit, setNewHabit] = useState({
    title: '',
    description: '',
    frequency: 'daily'
  });

  useEffect(() => {
    if (session) {
      fetchHabits();
    }
  }, [session]);

  const fetchHabits = async () => {
    try {
      const response = await fetch('/api/habits');
      if (!response.ok) {
        throw new Error('Failed to fetch habits');
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format');
      }
      setHabits(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching habits:', error);
      setError(error instanceof Error ? error.message : 'Failed to fetch habits');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckIn = async (habitId: string) => {
    try {
      const response = await fetch(`/api/habits/${habitId}/checkin`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to check in');
      }
      await fetchHabits();
    } catch (error) {
      console.error('Error checking in:', error);
      setError(error instanceof Error ? error.message : 'Failed to check in');
    }
  };

  const handleCreateHabit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHabit),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create habit');
      }
      
      setNewHabit({ title: '', description: '', frequency: 'daily' });
      setError(null);
      await fetchHabits();
    } catch (error) {
      console.error('Error creating habit:', error);
      setError(error instanceof Error ? error.message : 'Failed to create habit');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-4">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchHabits}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Habit Tracker</h1>
      
      {/* Create New Habit Form */}
      <form onSubmit={handleCreateHabit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Habit Title"
          value={newHabit.title}
          onChange={(e) => setNewHabit({...newHabit, title: e.target.value})}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={newHabit.description}
          onChange={(e) => setNewHabit({...newHabit, description: e.target.value})}
          className="w-full p-2 border rounded"
        />
        <select
          value={newHabit.frequency}
          onChange={(e) => setNewHabit({...newHabit, frequency: e.target.value})}
          className="w-full p-2 border rounded"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Habit
        </button>
      </form>

      {/* Habits List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(habits) && habits.length > 0 ? (
          habits.map((habit) => (
            <div key={habit._id} className="border rounded-lg p-4 shadow">
              <h2 className="text-xl font-semibold">{habit.title}</h2>
              <p className="text-gray-600">{habit.description}</p>
              <p className="text-sm">Streak: {habit.streak} days</p>
              <button
                onClick={() => handleCheckIn(habit._id)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Check In
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-gray-500">
            No habits created yet. Start by creating your first habit!
          </div>
        )}
      </div>

      {/* Progress Chart */}
      {habits.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Progress Overview</h2>
          <LineChart width={800} height={400} data={habits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="streak" stroke="#8884d8" />
          </LineChart>
        </div>
      )}
    </div>
  );
} 