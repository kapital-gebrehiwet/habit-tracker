'use client';

import { useSession, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import HabitCard from '@/components/HabitCard';

interface Habit {
  _id: string;
  title: string;
  description?: string;
  streak: number;
}

export default function Home() {
  const { data: session, status } = useSession();
  const [showAddHabit, setShowAddHabit] = useState(false);
  const [newHabit, setNewHabit] = useState({ title: '', description: '' });
  const [habits, setHabits] = useState<Habit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (session) {
      fetchHabits();
    }
  }, [session]);

  async function fetchHabits() {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch('/api/habits');
      if (!response.ok) throw new Error('Failed to fetch habits');
      const data = await response.json();
      setHabits(data);
    } catch (err) {
      setError('Failed to load habits');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCreateHabit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!newHabit.title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      setIsCreating(true);
      setError('');
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newHabit.title.trim(),
          description: newHabit.description.trim()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create habit');
      }

      setHabits([data, ...habits]);
      setNewHabit({ title: '', description: '' });
      setShowAddHabit(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create habit');
      console.error('Create habit error:', err);
    } finally {
      setIsCreating(false);
    }
  }

  async function handleCheckIn(habitId: string) {
    try {
      setIsLoading(true);
      setError('');
      const response = await fetch(`/api/habits/${habitId}/checkin`, {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Failed to check in');
      await fetchHabits(); // Refresh habits to get updated streak
    } catch (err) {
      setError('Failed to check in');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Welcome to Habit Tracker</h1>
        <button
          onClick={() => signIn('google')}
          className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-gray-900 shadow-md hover:bg-gray-50"
        >
          <Image src="/google.svg" alt="Google logo" width={20} height={20} />
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Your Habits</h1>
          <button
            onClick={() => setShowAddHabit(!showAddHabit)}
            className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {showAddHabit ? 'Cancel' : '+ Add Habit'}
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {showAddHabit && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">Create New Habit</h2>
            <form onSubmit={handleCreateHabit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={newHabit.title}
                  onChange={(e) => setNewHabit({ ...newHabit, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Enter habit title"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description (optional)
                </label>
                <textarea
                  id="description"
                  value={newHabit.description}
                  onChange={(e) => setNewHabit({ ...newHabit, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
                  placeholder="Enter habit description"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                disabled={isCreating || !newHabit.title.trim()}
                className="w-full rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isCreating ? 'Creating...' : 'Create Habit'}
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {habits.map((habit) => (
            <HabitCard
              key={habit._id}
              title={habit.title}
              description={habit.description}
              streak={habit.streak}
              onCheckIn={() => handleCheckIn(habit._id)}
            />
          ))}
        </div>

        {habits.length === 0 && !isLoading && (
          <div className="text-center text-gray-600">
            No habits yet. Create your first habit to get started!
          </div>
        )}
      </div>
    </div>
  );
} 