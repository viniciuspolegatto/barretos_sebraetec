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


  
  document.getElementById("voltar").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
});
