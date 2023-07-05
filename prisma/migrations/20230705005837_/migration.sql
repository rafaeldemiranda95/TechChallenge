/*
  Warnings:

  - You are about to drop the column `tempo` on the `Produto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "tempo",
ADD COLUMN     "tempoPreparo" DOUBLE PRECISION DEFAULT 0;
