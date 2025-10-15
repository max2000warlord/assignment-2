import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const outputs = await prisma.savedOutput.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(outputs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch outputs' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, htmlCode } = body;

    const output = await prisma.savedOutput.create({
      data: { name, htmlCode }
    });

    return NextResponse.json(output, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create output' }, { status: 500 });
  }
}
