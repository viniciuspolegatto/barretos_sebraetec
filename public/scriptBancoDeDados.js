
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

botaoAddDados.addEventListener("click",function(){
  console.log(entradaDeNome.value)
  listaDeDados.push(entradaDeNome.value)
  listaDeDados.push(entradaDeCpf.value)
  listaDeDados.push(entradaDeEmail.value)
  listaDeDados.push(entradaDeTel.value)
  listaDeDados.push(entradaDeEnd.value)
  console.log(listaDeDados)
  
  let futuroValorInnerHTML = ""
  
  for (let i=0;i<listaDeDados.length;i=i+1){
    console.log(listaDeDados[i])
    futuroValorInnerHTML=futuroValorInnerHTML+"<li>"+listaDeDados[i]+"</li>"
  }
  
  console.log(futuroValorInnerHTML)
  
  listaMontada.innerHTML=futuroValorInnerHTML
  
  })


botaoLimparDados.addEventListener("click",function(){
    listaMontada.innerHTML=""
    listaDeDados=[]
  })


/*
document.querySelector("#enviaBD").addEventListener("click", function(event) {
  event.preventDefault();

  var nomeBD = document.getElementById('nomeCons').value;
  var cpfBD = document.getElementById('cpfCons').value;
  var emailBD = document.getElementById('emailCons').value;
  var telBD = document.getElementById('telCons').value;
  var enderecoBD = document.getElementById('enderecoCons').value;
  
  console.log("Nome:", nomeBD);
  console.log("CPF:", cpfBD);
  console.log("Email:", emailBD);
  console.log("TEL:", telBD);
  console.log("Endereço:", enderecoBD);
});
*/


/*
const botaoParaBd = document.querySelector("#enviaBD");

const listaDeFrutas =["pera", "banana", "melancia"]

// -- CÓDIGO PARA MONITORAMENTO DO CLICK NO BOTÃO
botaoParaBd.addEventListener("click", function()
{
  botaoParaBd.innerHTML = "Você Clicou!!!" 
})

-----------------------------

document.getElementById('enviaBD').addEventListener('click', async function() {
  var nomeBD = document.getElementById('nomeCons').value;
  var cpfBD = document.getElementById('cpfCons').value;
  var emailBD = document.getElementById('emailCons').value;
  var telBD = document.getElementById('telCons').value;
  var enderecoBD = document.getElementById('enderecoCons').value;
  
  localStorage.setItem('nomeBD', nomeBD);
  localStorage.setItem('cpfBD', cpfBD)
  localStorage.setItem('emailBD', emailBD);
  localStorage.setItem('telBD', telBD);
  localStorage.setItem('enderecoBD', enderecoBD)
});

  
var nomeBD = localStorage.getItem("nomeBD");
var cpfBD = localStorage.getItem("cpfBD");
var emailBD = localStorage.getItem("emailBD");
var telBD = localStorage.getItem("telBD");
var enderecoBD = localStorage.getItem("enderecoBD");

__________________________________________________________

*/

/*

var nomeBD = "afafafafaf";
var cpfBD = "afafafafafa";
var emailBD = "vixeVixeVixe";
var telBD = "Frankfurt";
var enderecoBD = "Oxi_Congonhas";

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
  var sql = "INSERT INTO ClientesSEBRAE (nome, cpf, email, telefone, endereco) VALUES ?";
  
var values = [
    [nomeBD, cpfBD, emailBD, telBD, enderecoBD]
  ];
  

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

*/
  
  
//    var values = [nomeBD, cpfBD, emailBD, telBD, enderecoBD];
//    ('${nomeBD}', '${cpfBD}', '${emailBD}', '${telBD}', '${enderecoBD}');
//    ('nomeBD', 'cpfBD', 'emailBD', 'telBD', 'enderecoBD')
// $sql = "INSERT INTO users (name, contact) VALUES ('$name', '$contact')";
// '$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'
//  ['$nomeBD', '$cpfBD', '$emailBD', '$telBD', '$enderecoBD'],

