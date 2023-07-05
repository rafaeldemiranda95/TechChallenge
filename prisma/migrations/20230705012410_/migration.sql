/*
  Warnings:

  - You are about to drop the column `tempoPreparo` on the `Pedido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "tempoPreparo",
ADD COLUMN     "tempoEspera" DOUBLE PRECISION DEFAULT 0;
