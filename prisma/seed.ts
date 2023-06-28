import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const bebidas = await prisma.produto.createMany({
    data: [
      {
        nome: 'Coca Cola 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Coca Cola',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Pepsi 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Pepsi',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Fanta 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Fanta',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Guaraná 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Guaraná',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Brahma 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Brahma',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Brahma 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Brahma',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Eisebahn 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Eisebahn',
        imagem: 'url da imagem virá aqui',
      },
      {
        nome: 'Heineken 500ml',
        categoria: 'Bebida',
        preco: 10.78,
        descricao: 'Um como de 500 ml de Heineken',
        imagem: 'url da imagem virá aqui',
      },

      {
        nome: 'X-Burguer',
        categoria: 'Lanche',
        preco: 10.78,
        descricao:
          'Um lanche clássico com hambúrguer, queijo e molho especial.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Salada',
        categoria: 'Lanche',
        preco: 12.5,
        descricao:
          'Um delicioso lanche com hambúrguer, queijo, alface, tomate e maionese.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Tudo',
        categoria: 'Lanche',
        preco: 15.9,
        descricao:
          'O lanche completo com hambúrguer, queijo, presunto, ovo, bacon, alface, tomate e maionese.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Frango',
        categoria: 'Lanche',
        preco: 11.5,
        descricao:
          'Um lanche saboroso com filé de frango, queijo, alface, tomate e molho especial.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Calabresa',
        categoria: 'Lanche',
        preco: 12.8,
        descricao:
          'Um lanche com linguiça calabresa, queijo, cebola, pimentão e maionese.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Veggie',
        categoria: 'Lanche',
        preco: 13.5,
        descricao:
          'Uma opção vegetariana com hambúrguer de legumes, queijo, alface, tomate e molho especial.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Bacon',
        categoria: 'Lanche',
        preco: 12.9,
        descricao:
          'Um lanche irresistível com hambúrguer, queijo, bacon crocante, alface, tomate e maionese.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Picanha',
        categoria: 'Lanche',
        preco: 15.8,
        descricao:
          'Um lanche gourmet com suculento hambúrguer de picanha, queijo, cebola caramelizada e molho especial.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Fish',
        categoria: 'Lanche',
        preco: 13.2,
        descricao:
          'Um lanche de peixe empanado, queijo, alface, tomate e molho tártaro.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'X-Frango Catupiry',
        categoria: 'Lanche',
        preco: 14.5,
        descricao:
          'Um lanche com filé de frango, queijo catupiry, alface, tomate e maionese.',
        imagem: 'url_da_imagem_aqui',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
