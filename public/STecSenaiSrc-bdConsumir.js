/* Arquivo STecSenaiScr-bdConsumir.js, sua função é absorver valores vindos do
scriptColetorDeDados.js e disponibilizá-los para que sejam enviados à tabela do
banco de dados*/

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
    const nome = nomeCliente;
    const endereco = servico; // variavel para teste
    const tel = telefone;
  
    const listaDeDados = [nome, cpf, email, telefone, endereco];


// --- TRECHO DE CÓDIGO PARA ENVIO DAS INFORMAÇÕES AO BANCO DE DEDADOS

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
        { campo: 'Endereço', valor: cepDigitado ? ${cepDigitado.logradouro || 'N/A'}, ${cepDigitado.bairro || 'N/A'}, ${cepDigitado.localidade || 'N/A'} - ${cepDigitado.uf || 'N/A'} : 'N/A' },
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