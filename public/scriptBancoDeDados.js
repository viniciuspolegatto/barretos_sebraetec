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
  var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ?, ?, ?, ?, ?";
  
  
document.getElementById('enviaBD').addEventListener('click', async function() {
  const nomeBD = document.getElementById('nomeCons').value;
  const cpfBD = document.getElementById('cpfCons').value;
  const emailBD = document.getElementById('emailCons').value;
  const telBD = document.getElementById('telCons').value;
  const enderecoBD = document.getElementById('enderecoCons').value;
  
  localStorage.setItem('nomeBD', nomeBD);
  localStorage.setItem('cpfBD', cpfBD)
  localStorage.setItem('emailBD', emailBD);
  localStorage.setItem('telBD', telBD);
  localStorage.setItem('enderecoBD', enderecoBD)
});

  
const nomeBD = localStorage.getItem("nomeBD");
const cpfBD = localStorage.getItem("cpfBD");
const emailBD = lo

  
  
var values = [
     
     
    ['$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'],
   
  ];
  

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

