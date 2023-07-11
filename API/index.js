const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Cria a conexão com o banco de dados
const db = new sqlite3.Database("../DB/dados.db");

const app = express();
const port = 3000;

// Rota para obter dados da tabela ClienteEnderecoApp com base no ID_Cliente
app.get('/cliente-endereco-app/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.get('SELECT * FROM ClienteEnderecoApp WHERE ID_Cliente = ?', [ID_Cliente], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro no servidor');
    } else if (row) {
      res.send(row);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  });
});

// Rota para obter dados da tabela ClientePerfilApp com base no ID_Cliente
app.get('/cliente-perfil-app/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.get('SELECT * FROM ClientePerfilApp WHERE ID_Cliente = ?', [ID_Cliente], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro no servidor');
    } else if (row) {
      res.send(row);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  });
});

// Rota para obter dados da tabela dados com base no ID_Cliente
app.get('/dados/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.get('SELECT * FROM dados WHERE ID_Cliente = ?', [ID_Cliente], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro no servidor');
    } else if (row) {
      res.send(row);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
