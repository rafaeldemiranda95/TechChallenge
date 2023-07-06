/*
  Warnings:

  - You are about to drop the column `tempoEspera` on the `Pedido` table. All the data in the column will be lost.
  - Added the required column `tempoPreparo` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "tempoEspera",
ADD COLUMN     "tempoPreparo" INTEGER;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "tempoPreparo" INTEGER NOT NULL;
