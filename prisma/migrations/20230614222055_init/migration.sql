/*
  Warnings:

  - You are about to drop the column `endereco` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "endereco",
DROP COLUMN "name",
ADD COLUMN     "nome" TEXT,
ADD COLUMN     "senha" TEXT;
