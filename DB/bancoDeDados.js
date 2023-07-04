const sqlite3 = require('sqlite3').verbose();

// Cria a conexão com o banco de dados
const db = new sqlite3.Database('dados.db');

// Insere dados fictícios na tabela ClienteEndereçoApp
db.run(`INSERT INTO ClienteEndereçoApp (ID_Cliente, Rua, Cidade, Estado, Cep, Zona)
    VALUES (1, 'Rua A', 'Cidade A', 'Estado A', '12345678', 'Zona A')`);

// Insere dados fictícios na tabela ClientePerfilApp
db.run(`INSERT INTO ClientePerfilApp (ID_Cliente, Temperatura, Umidade, Consumo_diário, Consumo_mensal, Data_de_inicialização, Dias_até_a_colheita, Luz, Reservatório)
    VALUES (1, 25.5, 60.0, 10.2, 306.5, '2023-07-04 12:00:00', '10 dias', 100, 50.0)`);

// Fecha a conexão com o banco de dados
db.close();
