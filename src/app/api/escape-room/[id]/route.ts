import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Get single run with full HTML
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const run = await prisma.escapeRoomRun.findUnique({
      where: { id }
    });

    if (!run) {
      return NextResponse.json({ error: 'Run not found' }, { status: 404 });
    }

    return NextResponse.json(run);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch run' }, {
      status: 500
    });
  }
}


// PUT - Update run
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; const body = await request.json(); const {
      name,
      htmlCode,
      completedStages,
      totalStages,
      timeUsed,
      totalTime,
      isCompleted
    } = body;

    // Recalculate success rate if stages data is provided                                                                               
    const successRate = completedStages && totalStages
      ? (completedStages.length / totalStages) * 100
      : undefined;

    const run = await prisma.escapeRoomRun.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(htmlCode !== undefined && { htmlCode }),
        ...(completedStages !== undefined && { completedStages }),
        ...(totalStages !== undefined && { totalStages }),
        ...(timeUsed !== undefined && { timeUsed }),
        ...(totalTime !== undefined && { totalTime }),
        ...(isCompleted !== undefined && { isCompleted }),
        ...(successRate !== undefined && { successRate })
      }
    });

    return NextResponse.json(run);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update run' }, {
      status: 500
    });
  }
}


// DELETE - Remove run
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.escapeRoomRun.delete({ where: { id } });
    return NextResponse.json({ message: 'Run deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete run' }, {
      status: 500
    });
  }
}
