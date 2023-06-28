/*
  Warnings:

  - You are about to drop the column `endereco` on the `Pedido` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "endereco";

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "PedidoProduto" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "PedidoProduto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PedidoProduto" ADD CONSTRAINT "PedidoProduto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoProduto" ADD CONSTRAINT "PedidoProduto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
