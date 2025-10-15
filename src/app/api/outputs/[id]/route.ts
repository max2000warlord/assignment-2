import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// GET - Retrieve single output
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params; // Await the params object

    const output = await prisma.savedOutput.findUnique({
      where: { id }
    });

    if (!output) {
      return NextResponse.json({ error: 'Output not found' }, { status: 404 });
    }

    return NextResponse.json(output);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch output' }, { status: 500 });
  }
}

// PUT - Update output
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, htmlCode } = body;

    const output = await prisma.savedOutput.update({
      where: { id },
      data: { name, htmlCode }
    });

    return NextResponse.json(output);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update output' }, { status: 500 });
  }
}

// DELETE - Remove output
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await prisma.savedOutput.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Output deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete output' }, { status: 500 });
  }
}
