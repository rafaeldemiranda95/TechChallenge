CREATE TABLE Usuario (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  nome VARCHAR(255),
  cpf VARCHAR(14) UNIQUE,
  tipo VARCHAR(255) DEFAULT 'CLIENTE',
  senha VARCHAR(255),
  token VARCHAR(255) UNIQUE,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Produto (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255),
  categoria VARCHAR(255),
  preco FLOAT,
  descricao TEXT,
  imagem VARCHAR(255),
  tempoPreparo FLOAT DEFAULT 0,
  pedidoId INT,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);


CREATE TABLE Pedido (
  id SERIAL PRIMARY KEY,
  usuarioId INT,
  status VARCHAR(255) DEFAULT 'pendente',
  total FLOAT,
  tempoEspera FLOAT DEFAULT 0,
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW(),
  pagamentoId INT,
  filaId INT
);

CREATE TABLE PedidoProduto (
  id SERIAL PRIMARY KEY,
  pedidoId INT,
  produtoId INT,
  quantidade INT
);

CREATE TABLE Pagamento (
  id SERIAL PRIMARY KEY,
  pedidoId INT UNIQUE,
  usuarioId INT,
  valor FLOAT,
  status VARCHAR(255),
  data TIMESTAMP DEFAULT NOW(),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Fila (
  id SERIAL PRIMARY KEY,
  pedidoId INT UNIQUE,
  usuarioId INT,
  status VARCHAR(255),
  data TIMESTAMP DEFAULT NOW(),
  createdAt TIMESTAMP DEFAULT NOW(),
  updatedAt TIMESTAMP DEFAULT NOW()
);

INSERT INTO Usuario (email, nome, cpf, senha) VALUES
  ('usuario1@example.com', 'Usuário 1', '12345678901', 'senha123'),
  ('usuario2@example.com', 'Usuário 2', '98765432101', 'senha456');

INSERT INTO Produto (nome, categoria, preco, descricao, imagem) VALUES
  ('Produto A', 'Categoria X', 19.99, 'Descrição do Produto A', 'imagem1.jpg'),
  ('Produto B', 'Categoria Y', 29.99, 'Descrição do Produto B', 'imagem2.jpg'),
  ('Produto C', 'Categoria Z', 9.99, 'Descrição do Produto C', 'imagem3.jpg');

INSERT INTO Pedido (usuarioId, total) VALUES
  (1, 39.98),
  (2, 19.99);

INSERT INTO PedidoProduto (pedidoId, produtoId, quantidade) VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 3);

INSERT INTO Pagamento (pedidoId, usuarioId, valor, status) VALUES
  (1, 1, 39.98, 'Aprovado'),
  (2, 2, 19.99, 'Pendente');

INSERT INTO Fila (pedidoId, usuarioId, status) VALUES
  (1, 1, 'Em andamento'),
  (2, 2, 'Pendente');