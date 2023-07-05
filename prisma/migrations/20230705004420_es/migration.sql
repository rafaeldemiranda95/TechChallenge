/*
  Warnings:

  - You are about to drop the column `tempoPreparo` on the `Produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "tempoPreparo",
ADD COLUMN     "tempo" DOUBLE PRECISION NOT NULL DEFAULT 0;
