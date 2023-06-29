-- DropForeignKey
ALTER TABLE "Fila" DROP CONSTRAINT "Fila_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "Fila" DROP CONSTRAINT "Fila_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "Pagamento" DROP CONSTRAINT "Pagamento_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "filaId" INTEGER,
ADD COLUMN     "pagamentoId" INTEGER;
