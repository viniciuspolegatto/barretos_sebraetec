// Captura de Dados Informados na ÁREA ÍNICIAL - FAZER CONTRATO
document.getElementById('botaoImpressaoCnpj').addEventListener('click', async function() {
  const cepDigitado = document.getElementById('cep').value;
  const cnpjDigitado = document.getElementById('cnpj').value;
  const nomeCliente = document.getElementById('nomeCliente').value;
  const cpf = document.getElementById('cpf').value;
  const numeroResidencia = document.getElementById('numeroResidencia').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const servico = document.getElementById('servicos').value;

  try {
    let resCep = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`);
    let dataCep = await resCep.json();

    if (dataCep.erro) {
      throw new Error("CEP não encontrado");
    }

    let resCnpj = await fetch(`/cnpj/${cnpjDigitado}`);
    let dataCnpj = await resCnpj.json();

    // Preenchendo parte abaixo dos campos de Dados = a tabela que será apresentada após a consulta das APIS
    document.getElementById('cnpj-td').textContent = cnpjDigitado;
    document.getElementById('razao-social-td').textContent = dataCnpj.nome;
    document.getElementById('empresa-atividade-principal').textContent = dataCnpj.atividade_principal[0].text;
    document.getElementById('empresa-nome-fantasia').textContent = dataCnpj.fantasia;
    document.getElementById('empresa-logradouro').textContent = dataCnpj.logradouro;
    document.getElementById('empresa-municipio').textContent = dataCnpj.municipio;
    document.getElementById('empresa-situacao').textContent = dataCnpj.situacao;
    document.getElementById('telefone-td').textContent = dataCnpj.telefone;
    document.getElementById('endereco-td').textContent = `${dataCep.logradouro}, ${dataCep.bairro}, ${dataCep.localidade} - ${dataCep.uf}`;
    document.getElementById('cep-td').textContent = cepDigitado;
    document.getElementById('nome-cliente-td').textContent = nomeCliente;
    document.getElementById('cpf-td').textContent = cpf;
    document.getElementById('numero-residencia-td').textContent = numeroResidencia;
    document.getElementById('telefone-contato-td').textContent = telefone;
    document.getElementById('email-td').textContent = email;
    document.getElementById('servico-td').textContent = servico;

    document.getElementById('data-table').style.display = 'block';

    // Armazenar os dados no localStorage
    localStorage.setItem('dadosCnpj', JSON.stringify(dataCnpj));
    localStorage.setItem('cepDigitado', JSON.stringify(dataCep)); // Armazenar dados do CEP como JSON
    localStorage.setItem('nomeCliente', nomeCliente);
    localStorage.setItem('cpf', cpf);
    localStorage.setItem('numeroResidencia', numeroResidencia);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('email', email);
    localStorage.setItem('servico', servico);

  } catch (error) {
    console.error(error);
    alert("Erro ao buscar os dados. Por favor, verifique as informações digitadas e tente novamente.");
  }
});
