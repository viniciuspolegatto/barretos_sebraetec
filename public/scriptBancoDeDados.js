var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ('Company Inc', 'Highway 37', 'TEste', 'testando', 'apenas Teste')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});



document.getElementById('enviaBD').addEventListener('click', async function() {
  const nomeBD = document.getElementById('nome').value;
  const cpfBD = document.getElementById('cpf').value;
  const emailBD = document.getElementById('email').value;
  const telBD = document.getElementById('tel').value;
  const enderecoBD = document.getElementById('endereco').value;



    // Preenchendo a tabela
    document.getElementById('cnpj-td').textContent = cnpjDigitado;
    document.getElementById('razao-social-td').textContent = dataCnpj.nome;
    document.getElementById('empresa-atividade-principal').textContent = dataCnpj.atividade_principal[0].text;
    document.getElementById('empresa-nome-fantasia').textContent = dataCnpj.fantasia;
    document.getElementById('empresa-logradouro').textContent = dataCnpj.logradouro;