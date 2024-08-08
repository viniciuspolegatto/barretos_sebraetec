var mysql = require('mysql');

document.getElementById('enviaBD').addEventListener('click', async function() {
  var nomeBD = document.getElementById('nome').value;
  var cpfBD = document.getElementById('cpf').value;
  var emailBD = document.getElementById('email').value;
  var telBD = document.getElementById('tel').value;
  var enderecoBD = document.getElementById('endereco').value;


var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ('nomeBD', 'cpfBD', 'emailBD', 'telBD', 'enderecoBD')";

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
  
  
  
  
//    var values = [nomeBD, cpfBD, emailBD, telBD, enderecoBD];
//    ('${nomeBD}', '${cpfBD}', '${emailBD}', '${telBD}', '${enderecoBD}');
//    ('nomeBD', 'cpfBD', 'emailBD', 'telBD', 'enderecoBD')
// $sql = "INSERT INTO users (name, contact) VALUES ('$name', '$contact')";
// '$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'
  