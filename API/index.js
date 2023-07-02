const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Cria uma instância do banco de dados "dados.db"
const db = new sqlite3.Database('../DB/dados.db');

// Rota GET para obter os dados da tabela ClienteEndereçoApp
app.get('/cliente-endereco-app/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.all('SELECT * FROM ClienteEndereçoApp WHERE ID_Cliente = ?', [ID_Cliente], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Rota GET para obter os dados da tabela ClientePerfilApp
app.get('/cliente-perfil-app/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.all('SELECT * FROM ClientePerfilApp WHERE ID_Cliente = ?', [ID_Cliente], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Rota GET para obter os dados da tabela ClienteEndereço
app.get('/cliente-endereco/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.all('SELECT * FROM ClienteEndereço WHERE ID_Cliente = ?', [ID_Cliente], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Rota GET para obter os dados da tabela ClientePerfil
app.get('/cliente-perfil/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.all('SELECT * FROM ClientePerfil WHERE ID_Cliente = ?', [ID_Cliente], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Rota GET para obter os dados da tabela ClienteRegistro
app.get('/cliente-registro/:id', (req, res) => {
  const ID_Cliente = req.params.id;

  db.all('SELECT * FROM ClienteRegistro WHERE ID_Cliente = ?', [ID_Cliente], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
