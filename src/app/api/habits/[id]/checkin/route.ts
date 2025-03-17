import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/auth';
import connectDB from '../../../../../lib/mongodb';
import Habit from '../../../../../models/Habit';

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const habit = await Habit.findOne({
      _id: params.id,
      userId: session.user.id
    });

    if (!habit) {
      return NextResponse.json({ error: 'Habit not found' }, { status: 404 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastCheckIn = habit.completedDates.length > 0 
      ? new Date(habit.completedDates[habit.completedDates.length - 1])
      : null;

    if (!lastCheckIn || lastCheckIn.getTime() < today.getTime()) {
      habit.completedDates.push(today);
      habit.streak += 1;
      await habit.save();
    }

    return NextResponse.json(habit);
  } catch (error) {
    console.error('Check-in error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 