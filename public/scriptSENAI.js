// scriptSENAI.js

document.addEventListener('DOMContentLoaded', () => {
  // Verifica se há dados armazenados no localStorage
  const dadosCnpj = JSON.parse(localStorage.getItem('dadosCnpj'));
  const cepDigitado = JSON.parse(localStorage.getItem('cepDigitado'));
  const nomeCliente = localStorage.getItem('nomeCliente');
  const cpf = localStorage.getItem('cpf');
  const numeroResidencia = localStorage.getItem('numeroResidencia');
  const telefone = localStorage.getItem('telefone');
  const email = localStorage.getItem('email');
  const servico = localStorage.getItem('servico');

  // Lógica para processar os dados (exemplo)
  if (dadosCnpj && cepDigitado) {
    // Exemplo de processamento ou exibição dos dados
    console.log('Dados do CNPJ:', dadosCnpj);
    console.log('Dados do CEP:', cepDigitado);
    console.log('Nome do Cliente:', nomeCliente);
    console.log('CPF:', cpf);
    console.log('Número da Residência:', numeroResidencia);
    console.log('Telefone:', telefone);
    console.log('E-mail:', email);
    console.log('Serviço:', servico);
  } else {
    console.log('Nenhum dado encontrado no localStorage.');
  }
});
