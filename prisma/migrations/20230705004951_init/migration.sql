/*
  Warnings:

  - You are about to alter the column `tempo` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "tempo" SET DEFAULT 0,
ALTER COLUMN "tempo" SET DATA TYPE INTEGER;
