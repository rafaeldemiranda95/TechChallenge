/*
  Warnings:

  - Added the required column `tempoEspera` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "tempoEspera" INTEGER NOT NULL;
