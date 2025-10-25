import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - List all escape room runs with stats
export async function GET() {
  try {
    const runs = await prisma.escapeRoomRun.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        completedStages: true,
        totalStages: true,
        timeUsed: true,
        totalTime: true,
        isCompleted: true,
        successRate: true,
        createdAt: true,
      }
    });

    return NextResponse.json(runs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch runs' }, { status: 500 });
  }
}

// POST - Save escape room run
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      htmlCode,
      completedStages,
      totalStages,
      timeUsed,
      totalTime,
      isCompleted
    } = body;

    const successRate = (completedStages.length / totalStages) * 100;

    const run = await prisma.escapeRoomRun.create({
      data: {
        name,
        htmlCode,
        completedStages,
        totalStages,
        timeUsed,
        totalTime,
        isCompleted,
        successRate
      }
    });

    return NextResponse.json(run, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save run' }, { status: 500 });
  }
}
