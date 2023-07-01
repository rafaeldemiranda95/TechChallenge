-- CreateTable
CREATE TABLE "Fila" (
    "id" SERIAL NOT NULL,
    "pedidoId" INTEGER NOT NULL,
    "usuarioId" INTEGER,
    "valor" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fila_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Fila_pedidoId_key" ON "Fila"("pedidoId");

-- AddForeignKey
ALTER TABLE "Fila" ADD CONSTRAINT "Fila_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fila" ADD CONSTRAINT "Fila_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
