import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

// Serverless function to generate analytics
export async function GET() {
  try {
    // Get all escape room runs
    const runs = await prisma.escapeRoomRun.findMany({
      select: {
        isCompleted: true,
        successRate: true,
        timeUsed: true,
        totalTime: true,
        totalStages: true,
        completedStages: true,
        createdAt: true,
      }
    });

    // Calculate analytics
    const totalRuns = runs.length;
    const completedRuns = runs.filter(r => r.isCompleted).length;
    const completionRate = totalRuns > 0 ? (completedRuns / totalRuns) * 100 : 0;

    const averageSuccessRate = totalRuns > 0
      ? runs.reduce((sum, r) => sum + r.successRate, 0) / totalRuns
      : 0;

    const averageTimeUsed = totalRuns > 0
      ? runs.reduce((sum, r) => sum + r.timeUsed, 0) / totalRuns
      : 0;

    const averageCompletedStages = totalRuns > 0
      ? runs.reduce((sum, r) => sum + r.completedStages.length, 0) / totalRuns
      : 0;

    // Get runs by date (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentRuns = runs.filter(r => r.createdAt >= sevenDaysAgo);

    // Get best and worst performances
    const bestRun = runs.reduce((best, current) =>
      current.successRate > best.successRate ? current : best
      , runs[0] || null);

    const worstRun = runs.reduce((worst, current) =>
      current.successRate < worst.successRate ? current : worst
      , runs[0] || null);

    const analytics = {
      overview: {
        totalRuns,
        completedRuns,
        completionRate: parseFloat(completionRate.toFixed(2)),
        averageSuccessRate: parseFloat(averageSuccessRate.toFixed(2)),
        averageTimeUsed: parseFloat(averageTimeUsed.toFixed(2)),
        averageCompletedStages: parseFloat(averageCompletedStages.toFixed(2)),
      },
      recent: {
        last7Days: recentRuns.length,
        recentCompletionRate: recentRuns.length > 0
          ? parseFloat(((recentRuns.filter(r => r.isCompleted).length / recentRuns.length) * 100).toFixed(2))
          : 0,
      },
      performance: {
        bestSuccessRate: bestRun ? bestRun.successRate : 0,
        worstSuccessRate: worstRun ? worstRun.successRate : 0,
      },
      metadata: {
        generatedAt: new Date().toISOString(),
        computedBy: 'Serverless Function',
      }
    };

    return NextResponse.json(analytics);
  } catch (error) {
    console.error('Analytics generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate analytics' },
      { status: 500 }
    );
  }
}
