document.addEventListener("DOMContentLoaded", function () {
  const dadosCnpj = JSON.parse(localStorage.getItem("dadosCnpj"));
  const cepDigitadoString = localStorage.getItem("cepDigitado");
  const cepDigitado = cepDigitadoString ? JSON.parse(cepDigitadoString) : null;
  const nomeCliente = localStorage.getItem("nomeCliente");
  const numeroResidencia = localStorage.getItem("numeroResidencia");
  const telefone = localStorage.getItem("telefone");
  const emailpessoal = localStorage.getItem("email");
  const cpf = localStorage.getItem("cpf");
  const servicos = localStorage.getItem("servico");
  

  // Função para obter o nome fantasia -------------------------------------------------
  function obterNomeFantasia() {
    // Coleta o valor de dadosCnpj.fantasia
    let nomeFantasia = dadosCnpj.fantasia;
    
    // Verifica se o nomeFantasia é vazio ou nulo e ajusta o valor
    if (!nomeFantasia || nomeFantasia.trim() === "") {
      nomeFantasia = ", nome fantasia não atribuído";
    } else {
      nomeFantasia = ", nome fantasia " + dadosCnpj.fantasia;
    }
    
    return nomeFantasia;
  }

  // Obtém o nome fantasia
  const nomeFantasia = obterNomeFantasia();
// -------------------------------------------------------------------------------------
   
   
  if (!dadosCnpj || !cepDigitado) {
    alert(
      "Verifique se o CNPJ ou o CEP são apenas números e se estão corretos. Por favor, volte e preencha os dados novamente."
    );
    window.location.href = "/index.html";
    return;
  }

  const reportDiv = document.getElementById("report");
  reportDiv.innerHTML = `
    <p style="text-align: justify;">
      ${dadosCnpj.nome}${nomeFantasia}, inscrita no CNPJ nº ${dadosCnpj.cnpj}, localizada na ${dadosCnpj.logradouro}, ${dadosCnpj.numero},
      bairro ${dadosCnpj.bairro}, no município de ${dadosCnpj.municipio} - SP, CEP: ${dadosCnpj.cep}, telefone(s) ${dadosCnpj.telefone},
      e-mail ${dadosCnpj.email}, empresa neste ato representada por ${nomeCliente}, brasileiro(a), Empresário(a)/Autônomo(a) com 
      inscrição no CPF nº ${cpf}, residente à ${cepDigitado.logradouro}, nº ${numeroResidencia}, bairro ${cepDigitado.bairro},
      CEP ${cepDigitado.cep}, na comarca de ${cepDigitado.localidade} - ${cepDigitado.uf}, telefone de contato ${telefone} e e-mail
      pessoal ${emailpessoal}, denominado(a) como <b>CONTRATANTE</b>
    </p>`;

  const reportProduto = document.getElementById("reportProduto");
  reportProduto.innerHTML = `
    <p style="text-align: justify;">
    Produto específico da prestação dos serviços: ${servicos}
    </p>`;
  
  const clienteAssinante = document.getElementById("clienteAssinante");
  clienteAssinante.innerHTML = `
    <h3 style="text-align: justify;">
    <b>CONTRATANTE / EMPRESA</b><br>
    <b>${nomeCliente}<b><br>
    <b>${cpf}<b>
    </p>`;

// ------------------------------------------------------ INSERIDO BANCO DE DADOS ---------------------
/*


  const listaMontada = document.querySelector("#listaVisualDeDados");
  console.log("2 Lista Montada - Lista Visual", listaMontada);

  const listaDeDados = [nome, cpf, email, telefone, endereco];
  console.log("4 - Após Clique do botão", listaDeDados);

  // Constrói o HTML da lista
  let futuroValorInnerHTML = "";
  for (let i = 0; i < listaDeDados.length; i++) {
    console.log("5 - Início do Length", listaDeDados[i]);
    futuroValorInnerHTML += "<li>" + listaDeDados[i] + "</li>";
  }

  console.log("6 - Futuro Valor Inner HTML", futuroValorInnerHTML);
  listaMontada.innerHTML = futuroValorInnerHTML;
  console.log("7 - Lista montada.innerHTML", listaMontada);

  // Envia os dados para o servidor
  const data = {
    nomeCliente: nome,
    cpf: cpf,
    emailpessoal: email,
    telefone: telefone,
    servicos: endereco
  };

  fetch('/addData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(text => {
    console.log('Resposta do servidor:', text);
    if (text.includes("Dados adicionados ao banco de dados")) {
      alert("Cadastro realizado com sucesso!");
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Erro ao realizar o cadastro: " + error.message);
  });

  let segundoElemento = listaDeDados[3];
  console.log("8 - Item Capturado da Lista Inner", segundoElemento);
});




*/ 
// -----------------------------------------------------------------------------------------------------
  
  
  
  
  



  
  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
});
