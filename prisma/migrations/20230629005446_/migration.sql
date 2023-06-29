/*
  Warnings:

  - The primary key for the `PedidoProduto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_produtoId_fkey";

-- AlterTable
ALTER TABLE "PedidoProduto" DROP CONSTRAINT "PedidoProduto_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "PedidoProduto_pkey" PRIMARY KEY ("id");
