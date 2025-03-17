import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/auth';
import connectDB from '@/lib/mongodb';
import Habit from '@/models/Habit';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'You must be signed in to view habits' },
        { status: 401 }
      );
    }

    await connectDB();
    console.log('MongoDB connected successfully');
    
    const habits = await Habit.find({ 
      userId: session.user.id 
    }).sort({ createdAt: -1 });
    
    console.log('Habits fetched:', habits.length);
    return NextResponse.json(habits);
  } catch (error) {
    console.error('Fetch habits error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Failed to fetch habits' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'You must be signed in to create habits' },
        { status: 401 }
      );
    }

    const { title, description } = await request.json();
    console.log('Received habit data:', { title, description });
    
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    await connectDB();
    console.log('MongoDB connected successfully');
    
    const habit = await Habit.create({
      title,
      description,
      userId: session.user.id,
      streak: 0,
      completedDates: []
    });

    console.log('Habit created:', habit);
    return NextResponse.json(habit);
  } catch (error) {
    console.error('Create habit error:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Failed to create habit' },
      { status: 500 }
    );
  }
} 