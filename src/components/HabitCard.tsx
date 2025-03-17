'use client';

interface HabitCardProps {
  title: string;
  description?: string;
  streak: number;
  onCheckIn: () => void;
}

export default function HabitCard({ title, description, streak, onCheckIn }: HabitCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {description && <p className="mt-1 text-gray-600">{description}</p>}
      </div>
      
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Current Streak</p>
          <p className="text-2xl font-bold text-blue-500">{streak} days</p>
        </div>
        <button
          onClick={onCheckIn}
          className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Check In
        </button>
      </div>
    </div>
  );
} 