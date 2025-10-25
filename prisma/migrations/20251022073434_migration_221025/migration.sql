-- CreateTable
CREATE TABLE "EscapeRoomRun" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "htmlCode" TEXT NOT NULL,
    "completedStages" INTEGER[],
    "totalStages" INTEGER NOT NULL,
    "timeUsed" INTEGER NOT NULL,
    "totalTime" INTEGER NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "successRate" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EscapeRoomRun_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "EscapeRoomRun_isCompleted_idx" ON "EscapeRoomRun"("isCompleted");

-- CreateIndex
CREATE INDEX "EscapeRoomRun_createdAt_idx" ON "EscapeRoomRun"("createdAt");
