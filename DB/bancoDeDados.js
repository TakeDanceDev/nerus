const sqlite3 = require('sqlite3').verbose();

// Cria uma instância do banco de dados
const db = new sqlite3.Database('dados.db');

// Insere dados fictícios nas tabelas
db.serialize(() => {
  // Tabela ClienteEndereçoApp
  db.run(`INSERT INTO ClienteEndereçoApp (ID_Cliente, Rua, Cidade, Estado, Cep, Zona) VALUES (1, 'Rua A', 'Cidade A', 'Estado A', 'CEP A', 'Zona A')`);

  // Tabela ClientePerfilApp
  db.run(`INSERT INTO ClientePerfilApp (ID_Cliente, Temperatura, Umidade, Consumo_diário, Consumo_mensal, Data_de_inicialização, Dias_até_a_colheita) VALUES (1, 25.5, 60.2, 10.5, 250.7, '2023-07-01', '10 dias')`);

  // Tabela ClienteEndereço (no banco de dados TDD_Geladeira)
  db.run(`INSERT INTO ClienteEndereço (ID_Cliente, Rua, Cidade, Estado, Cep, Zona) VALUES (1, 'Rua B', 'Cidade B', 'Estado B', 'CEP B', 'Zona B')`);

  // Tabela ClientePerfil (no banco de dados TDD_Geladeira)
  db.run(`INSERT INTO ClientePerfil (ID_Cliente, Temperatura, Umidade, Consumo_diário, Consumo_mensal, Data_de_inicialização) VALUES (1, 23.8, 55.1, 9.2, 220.3, '2023-06-30')`);

  // Tabela ClienteRegistro (no banco de dados TDD_Geladeira)
  db.run(`INSERT INTO ClienteRegistro (ID_Cliente, Nome, Sobrenome, Telefone, Email, Ativo) VALUES (1, 'João', 'Silva', '999999999', 'joao.silva@example.com', 1)`);
});

// Fecha a conexão com o banco de dados
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Dados fictícios adicionados ao banco de dados.');
});
