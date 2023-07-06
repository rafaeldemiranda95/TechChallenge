/*
  Warnings:

  - Made the column `tempoPreparo` on table `Produto` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Produto" ALTER COLUMN "tempoPreparo" SET NOT NULL,
ALTER COLUMN "tempoPreparo" SET DEFAULT 0;
