/*
  Warnings:

  - Made the column `nome` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cpf` on table `Usuario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tipo` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "nome" SET NOT NULL,
ALTER COLUMN "cpf" SET NOT NULL,
ALTER COLUMN "tipo" SET NOT NULL;
