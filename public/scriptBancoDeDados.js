const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

// Conectar ao banco de dados
connection.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
    return;
  }
  console.log("Conectado ao banco de dados como ID " + connection.threadId);
});

// Rota para a página inicial
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

// Rota para receber dados do cliente e gravar na tabela ClientesSEBRAE
app.post("/cadastrarCliente", (req, res) => {
  const { nome, cpf, email, telefone, endereco } = req.body;

  if (!nome || !cpf || !email || !telefone || !endereco) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  // Inserir os dados na tabela ClientesSEBRAE
  const query = `
    INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco)
    VALUES (?, ?, ?, ?, ?)
  `;

  connection.query(query, [nome, cpf, email, telefone, endereco], (err, results) => {
    if (err) {
      console.error("Erro ao inserir os dados:", err);
      return res.status(500).send("Erro ao cadastrar cliente.");
    }
    res.send("Cliente cadastrado com sucesso!");
  });
});

// Iniciar o servidor
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
