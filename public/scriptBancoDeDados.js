const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/view/index.html");
});

app.post("/DialogFlow", function(request, response) {
  let connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
  });
  connection.connect();

  let intentName = request.body.queryResult.intent.displayName;

  
if (intentName == "Default_Welcome_Intent") {
   response.json({fulfillmentText: "Olá! 😃"+"\n\n"+"Sou a ISA... Estou em Treinamento no Atendimento Virtual do SEBRAE Barretos"+"\n\n"+"Vim para agilizar, mas se eu tiver dificuldades chamo um(a) atendente, Ok?😉"+"\n\n"+"*Podemos começar?*"});
}

  
if(intentName == 'verifica_cadastro'){
 let cpforigem = request.body.queryResult.parameters["cpf"];
 let cpfContato = cpforigem.replace(/\.|\-/g, '');
 let query = 'select * from cadastro where cpf = "'+cpfContato+'"';
 
 connection.query(query, function (error, results, fields) {

   
if (results[0]) {
     let nomeClienteBD = results[0].nome
     let contato = "Ok!"+"\n\n"+"Verifiquei que o CPF *"+cpforigem+"* está vinculado a *"+nomeClienteBD+"* 👍"+"\n\n"+'Vou passar algumas opções para atendimento rápido, por favor informe o assunto desejado:'+"\n\n"+'*1* - Soluções Técnicas para Empresas 🚀'+"\n"+'*2* - Cursos e Palestras 💼'+"\n"+'*3* - Informações sobre o MEI 👨‍💼👩‍💼'+"\n"+'*4* - Crédito e Programas 💰'+"\n"+'*5* - Controle Finaceiro💲📈';
      response.json({"fulfillmentText": contato });
  } 
   else {
    response.json({"fulfillmentText": '🤓 Verifiquei que faltam algumas informações...  será rápido continuar!'+"\n\n"+'💻 _a ação dará sequência no atendimento e também confirmará que você concorda com a política do SEBRAE sobre segurança dos seus dados, disponível no link:_'+"\n"+'https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf'+"\n\n"+'Por favor digite: *FAZER CADASTRO*'});
  }
})
}
  });