var mysql = require('mysql');

document.getElementById('enviaBD').addEventListener('click', async function() {
  const nomeBD = document.getElementById('nome').value;
  const cpfBD = document.getElementById('cpf').value;
  const emailBD = document.getElementById('email').value;
  const telBD = document.getElementById('tel').value;
  const enderecoBD = document.getElementById('endereco').value;


var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  var values = 
    ['${nomeBD}', '${cpfBD}', '${emailBD}', '${telBD}', '${enderecoBD}'],
  
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
