-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "categoria" TEXT;

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
