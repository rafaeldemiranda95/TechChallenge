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
      {
        nome: 'Sorvete de Chocolate',
        categoria: 'Sobremesa',
        preco: 8.5,
        descricao: 'Delicioso sorvete de chocolate com cobertura e granulado.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Pudim de Leite Condensado',
        categoria: 'Sobremesa',
        preco: 9.9,
        descricao:
          'Um clássico pudim de leite condensado com calda caramelizada.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Cheesecake de Morango',
        categoria: 'Sobremesa',
        preco: 12.8,
        descricao: 'Um cheesecake cremoso com cobertura de morango.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Mousse de Maracujá',
        categoria: 'Sobremesa',
        preco: 7.5,
        descricao: 'Deliciosa mousse de maracujá com sabor tropical.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Torta de Maçã',
        categoria: 'Sobremesa',
        preco: 10.5,
        descricao:
          'Uma torta caseira de maçã com uma deliciosa cobertura crocante.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Brownie de Chocolate',
        categoria: 'Sobremesa',
        preco: 9.5,
        descricao: 'Um brownie de chocolate macio e decadente.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Sundae de Caramelo',
        categoria: 'Sobremesa',
        preco: 11.2,
        descricao:
          'Um sundae com sorvete, calda de caramelo, chantilly e nozes.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Torta de Limão',
        categoria: 'Sobremesa',
        preco: 9.8,
        descricao: 'Uma torta refrescante de limão com cobertura de merengue.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Creme Brulée',
        categoria: 'Sobremesa',
        preco: 11.5,
        descricao:
          'Um clássico creme brulée com uma fina camada de açúcar caramelizado.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Pavê de Chocolate',
        categoria: 'Sobremesa',
        preco: 10.9,
        descricao:
          'Um pavê irresistível de chocolate com camadas de biscoito e creme.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Tiramisu',
        categoria: 'Sobremesa',
        preco: 12.5,
        descricao:
          'Um clássico tiramisu italiano com camadas de biscoito, café e creme de mascarpone.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Batata Frita',
        categoria: 'Acompanhamento',
        preco: 6.5,
        descricao: 'Deliciosas batatas fritas crocantes e temperadas.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Onion Rings',
        categoria: 'Acompanhamento',
        preco: 7.8,
        descricao: 'Anéis de cebola empanados e crocantes.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Mandioca Frita',
        categoria: 'Acompanhamento',
        preco: 6.9,
        descricao: 'Mandioca frita sequinha e saborosa.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Polenta Frita',
        categoria: 'Acompanhamento',
        preco: 7.2,
        descricao: 'Polenta frita com uma crosta dourada e macia por dentro.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Arroz Branco',
        categoria: 'Acompanhamento',
        preco: 4.5,
        descricao: 'Arroz branco soltinho e saboroso.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Feijão Tropeiro',
        categoria: 'Acompanhamento',
        preco: 8.9,
        descricao:
          'Uma deliciosa combinação de feijão, linguiça, bacon e farinha de mandioca.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Farofa',
        categoria: 'Acompanhamento',
        preco: 5.8,
        descricao: 'Uma farofa crocante e temperada.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Salada Mista',
        categoria: 'Acompanhamento',
        preco: 7.5,
        descricao:
          'Uma combinação de folhas verdes, tomate, cenoura e outros vegetais frescos.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Legumes Grelhados',
        categoria: 'Acompanhamento',
        preco: 8.2,
        descricao:
          'Uma seleção de legumes grelhados, como abobrinha, berinjela e pimentões.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Pure de Batata',
        categoria: 'Acompanhamento',
        preco: 6.8,
        descricao: 'Um purê de batata cremoso e saboroso.',
        imagem: 'url_da_imagem_aqui',
      },
      {
        nome: 'Cenoura Cozida',
        categoria: 'Acompanhamento',
        preco: 5.4,
        descricao: 'Cenouras cozidas no ponto certo, macias e nutritivas.',
        imagem: 'url_da_imagem_aqui',
      },
    ],
    skipDuplicates: true,
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
