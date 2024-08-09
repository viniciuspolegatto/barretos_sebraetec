const entradaDeNome = document.querySelector("#nomeCon")
const entradaDeCpf = document.querySelector("#cpfCon")
const entradaDeEmail = document.querySelector("#emailCon")
const entradaDeTel = document.querySelector("#telCon")
const entradaDeEnd = document.querySelector("#enderecoCon")
console.log(entradaDeNome)

const botaoAddDados = document.querySelector("#botaoAdicionarDados")
console.log(botaoAddDados)

const listaMontada = document.querySelector("#listaVisualDeDados")
console.log(listaMontada)

const botaoLimparDados = document.querySelector("#botaoLimparDados")

let listaDeDados = []

let values0;

botaoAddDados.addEventListener("click",function(){
  console.log(entradaDeNome.value)
  listaDeDados.push(entradaDeNome.value)
  listaDeDados.push(entradaDeCpf.value)
  listaDeDados.push(entradaDeEmail.value)
  listaDeDados.push(entradaDeTel.value)
  listaDeDados.push(entradaDeEnd.value)
  console.log(listaDeDados)
  
  // Capturar os valores dos campos de entrada
  let nomeBD = entradaDeNome.value;
  let cpfBD = entradaDeCpf.value;
  let emailBD = entradaDeEmail.value;
  let telBD = entradaDeTel.value;
  let enderecoBD = entradaDeEnd.value;

  // Exibir os valores capturados no console para verificação
  console.log("Dados capturados:");
  console.log("Nome:", nomeBD);
  console.log("CPF:", cpfBD);
  console.log("E-mail:", emailBD);
  console.log("Telefone:", telBD);
  console.log("Endereço:", enderecoBD);

  // Adicionar os valores ao array 'values'
  var novaBD = [
    [nomeBD, cpfBD, emailBD, telBD, enderecoBD]
  ];

  
  let futuroValorInnerHTML = ""
  
  for (let i=0;i<listaDeDados.length;i=i+1){
    console.log(listaDeDados[i])
    futuroValorInnerHTML=futuroValorInnerHTML+"<li>"+listaDeDados[i]+"</li>"
  }
  
  console.log(futuroValorInnerHTML)
  
  values0 = novaBD;
  
  listaMontada.innerHTML=futuroValorInnerHTML
  
})


var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB
});
  
  // Estabelecer a conexão com o banco de dados e inserir os dados
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ('$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD')";
    
    
    
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });



botaoLimparDados.addEventListener("click", function() {
  listaMontada.innerHTML = ""
  listaDeDados = []
});
