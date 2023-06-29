-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido"("id") ON DELETE SET NULL ON UPDATE CASCADE;
