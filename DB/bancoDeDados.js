const sqlite3 = require('sqlite3').verbose();

// Cria uma instância do banco de dados
const db = new sqlite3.Database('dados.db');

// Insere dados fictícios na tabela ClienteEnderecoApp
db.run(`
  INSERT INTO ClienteEnderecoApp (ID_Cliente, Rua, Cidade, Estado, Cep, Zona)
  VALUES (1, 'Rua A', 'Cidade A', 'Estado A', '12345-678', 'Zona A')
`);

// Insere dados fictícios na tabela ClientePerfilApp
db.run(`
  INSERT INTO ClientePerfilApp (Temperatura, Umidade, Consumo_diario, Consumo_mensal, Data_de_inicializacao, Dias_ate_a_colheita, Luz, Reservatorio)
  VALUES (25.5, 60.2, 10.2, 300.5, '2023-07-01', '7 dias', '90', 50.0)
`);

// Insere dados fictícios na tabela dados
db.run(`
  INSERT INTO dados (ID_Cliente, nome, sobrenome, email, senha, telefone, data_nascimento, genero, endereco, preferencias, foto_perfil)
  VALUES (1, 'João', 'Silva', 'joao@example.com', 'senha123', '123456789', '1990-01-01', 'Masculino', 'Rua A, Cidade A, Estado A', 'Nenhuma preferência', 'foto.png')
`);

// Fecha a conexão com o banco de dados
db.close();