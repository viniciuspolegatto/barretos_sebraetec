document.addEventListener('DOMContentLoaded', function() {
    // Recupera os dados armazenados no localStorage
    const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
    const cepDigitado = JSON.parse(localStorage.getItem('cepDigitado'));
    const nomeCliente = localStorage.getItem('nomeCliente');
    const cpf = localStorage.getItem('cpf');
    const numeroResidencia = localStorage.getItem('numeroResidencia');
    const telefone = localStorage.getItem('telefone');
    const email = localStorage.getItem('email');
    const servico = localStorage.getItem('servico');

// --------------------PROGR DO BANCO DE DEDADOS
  
  
  

const entradaDeNome = document.querySelector("#nomeCon");
const entradaDeCpf = document.querySelector("#cpfCon");
const entradaDeEmail = document.querySelector("#emailCon");
const entradaDeTel = document.querySelector("#telCon");
const entradaDeEnd = document.querySelector("#enderecoCon");
console.log("3 - Const Entrada de Nome", entradaDeNome);

botaoAddDados.addEventListener("click", function() {
  // Coleta os dados dos campos
  const nome = entradaDeNome.value.trim();
  const cpf = entradaDeCpf.value.trim();
  const telefone = entradaDeTel.value.trim();
  const email = entradaDeEmail.value.trim();
  const endereco = entradaDeEnd.value.trim();

  // Valida se nome, cpf e telefone estão preenchidos
  if (!nome || !cpf || !telefone) {
    alert("Preencha Nome, CPF e Telefone");
    return; // Impede o envio dos dados
  }

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
    nome: nome,
    cpf: cpf,
    email: email,
    tel: telefone,
    endereco: endereco
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
  
  
  
  
  
  
  
  
  
  
/*    // Preenche a tabela com os dados
    const tabelaBody = document.getElementById('dados-tabela');
    
    const dados = [
        { campo: 'CNPJ', valor: dadosCnpj ? dadosCnpj.cnpj : 'N/A' },
        { campo: 'Razão Social', valor: dadosCnpj ? dadosCnpj.nome : 'N/A' },
        { campo: 'Nome Fantasia', valor: dadosCnpj ? dadosCnpj.fantasia : 'N/A' },
        { campo: 'Atividade Principal', valor: dadosCnpj && dadosCnpj.atividade_principal ? dadosCnpj.atividade_principal[0].text : 'N/A' },
        { campo: 'Logradouro', valor: dadosCnpj ? dadosCnpj.logradouro : 'N/A' },
        { campo: 'Município', valor: dadosCnpj ? dadosCnpj.municipio : 'N/A' },
        { campo: 'Situação da Empresa', valor: dadosCnpj ? dadosCnpj.situacao : 'N/A' },
        { campo: 'Telefone', valor: dadosCnpj ? dadosCnpj.telefone : 'N/A' },
        { campo: 'CEP', valor: cepDigitado ? cepDigitado.cep : 'N/A' },
        { campo: 'Endereço', valor: cepDigitado ? `${cepDigitado.logradouro || 'N/A'}, ${cepDigitado.bairro || 'N/A'}, ${cepDigitado.localidade || 'N/A'} - ${cepDigitado.uf || 'N/A'}` : 'N/A' },
        { campo: 'Nome do Cliente', valor: nomeCliente || 'N/A' },
        { campo: 'CPF', valor: cpf || 'N/A' },
        { campo: 'Número da Residência', valor: numeroResidencia || 'N/A' },
        { campo: 'Telefone de Contato', valor: telefone || 'N/A' },
        { campo: 'E-mail Pessoal', valor: email || 'N/A' },
        { campo: 'Serviço', valor: servico || 'N/A' },
    ];

    dados.forEach(dado => {
        const tr = document.createElement('tr');
        const tdCampo = document.createElement('td');
        const tdValor = document.createElement('td');
        
        tdCampo.textContent = dado.campo;
        tdValor.textContent = dado.valor;

        tr.appendChild(tdCampo);
        tr.appendChild(tdValor);
        tabelaBody.appendChild(tr);
    }); */
});
