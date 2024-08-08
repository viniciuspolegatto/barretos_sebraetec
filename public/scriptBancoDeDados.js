const nomeBD = document.querySelector("#nomeCon")
console.log(nomeBD)

const botaoEnviarCon = document.querySelector("#enviarBD")
console.log(botaoEnviarCon)

//const listaMontada = document.querySelector("#listaVisualDeTarefas")
//console.log(listaMontada)

//const botaoLimparTarefas = document.querySelector("#botaoLimparTarefa")

let listaDeTarefas = []

botaoEnviarCon.addEventListener("click",function(){
  console.log(nomeBD.value)
  listaDeTarefas.push(entradaDeTarefa.value)
  console.log(listaDeTarefas)
  
  let futuroValorInnerHTML = ""
  
  for (let i=0;i<listaDeTarefas.length;i=i+1){
    console.log(listaDeTarefas[i])
    futuroValorInnerHTML=futuroValorInnerHTML+"<li>"+listaDeTarefas[i]+"</li>"
  }
  
  console.log(futuroValorInnerHTML)
  
  listaMontada.innerHTML=futuroValorInnerHTML
  
  })


botaoLimparTarefas.addEventListener("click",function(){
    listaMontada.innerHTML=""
    listaDeTarefas=[]
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

