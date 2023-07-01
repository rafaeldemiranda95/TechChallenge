/*
  Warnings:

  - The primary key for the `PedidoProduto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `PedidoProduto` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "PedidoProduto_pkey" PRIMARY KEY ("pedidoId", "produtoId");
