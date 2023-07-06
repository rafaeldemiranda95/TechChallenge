# TechChallenge

## TURMA 2SOAT

**Grupo 21**

349463 - Airton Patrocínio da Silva Junior

349308 - Rafael de Miranda

## Links:

[Link Miro](https://miro.com/welcomeonboard/cFBKa2FvMmk2aUlFdmJUMVkzV09mYXFSMjY4TFMyNU9HRUxoZnhCOVJlckROTFlGVzNaR081aGVhRzg4QVZLeXwzNDU4NzY0NTU0ODI1ODY4Mzg3fDI=?share_link_id=476610680949)

[Link gitHub](https://github.com/rafaeldemiranda95/TechChallenge)

## API

- Produtos
  | Método | URL | Header | Exemplo de Parâmetros |
  |--------|-----|--------|------------|
  | POST | http://localhost:3000/cadastroProduto | `{"nome":"Água 500ml","categoria": "Bebida","preco":2.55,"descricao": "Uma garrafa de água mineral sem gás","imagem": "url da imagem virá aqui"}` |
  | POST | http://localhost:3000/alteraProduto | `{"id": 4,"nome":"Coca Cola refil","categoria": "Bebida","preco":10.78,"descricao": "Um como de 500 ml de Coca Cola uqe você pode recarregar quantas vezes quiser","imagem": "url da imagem virá aqui"}` |
  | POST | http://localhost:3000/apagarProduto | Authorization: token usuário | `{"id": 5}` |
  | GET | http://localhost:3000/exibeProdutos | |
  | GET | http://localhost:3000/exibeProdutosPorId | |
  | GET | http://localhost:3000/exibeProdutosPorCategoria | |

- Usuário
  | Método | URL | Header | Exemplo de Parâmetros |
  |--------|-----|--------|------------|
  | POST | http://localhost:3000/cadastroCliente | `{"nome":"Rafael de Miranda","email":"3434@gmail.com","cpf":"96509759004"}` |
  | POST | http://localhost:3000/cadastroAdministrador | `{"nome":"Rafael de Miranda","email":"434343133332321@gmail.com","cpf":"51697242090","senha":"123456","tipo":"adminstrador"}` |
  | POST | http://localhost:3000/autenticaUsuarioAdministrador | `{"email":"derafae@gmail.com","senha":"123456"}` |
  | POST | http://localhost:3000/autenticaCliente | `{"cpf":"50651193095"}` |

- Prdidos
  | Método | URL | Header | Exemplo de Parâmetros |
  |--------|-----|--------|------------|
  | POST | http://localhost:3000/enviarPedido | Authorization: token usuário | `{"produtos":[{"id":9,"quantidade":2},{"id":1,"quantidade":1},{"id":8,"quantidade":2},{"id":30,"quantidade":1},{"id":20,"quantidade":1}]}` |
  | POST | http://localhost:3000/trocarStatusFila | Authorization: token usuário | `{"id":11,"status":"Finalizado"}` |
  | GET | http://localhost:3000/listarPedidos | Authorization: token usuário | |
  | GET | http://localhost:3000/listarFilas | Authorization: token usuário | |
