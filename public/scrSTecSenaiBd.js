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

  // Dados a serem enviados para o servidor
  const dados = {
    cnpj: dadosCnpj.cnpj,
    cep: cepDigitado.cep,
    nomeCliente,
    cpf,
    numeroResidencia,
    telefone,
    email,
    servico
  };

  // Exemplo de envio dos dados para um endpoint do servidor
  fetch('/api/enviarDados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Dados enviados com sucesso:', data);
    // Adicione aqui o código para lidar com a resposta do servidor
  })
  .catch(error => {
    console.error('Erro ao enviar os dados:', error);
  });
});
