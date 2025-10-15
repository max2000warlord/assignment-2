-- CreateTable
CREATE TABLE "SavedOutput" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "htmlCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedOutput_pkey" PRIMARY KEY ("id")
);
