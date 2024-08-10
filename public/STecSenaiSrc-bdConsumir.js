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

    if (!dadosCnpj || !cepDigitado) {
        console.error("Dados CNPJ ou CEP não encontrados no localStorage.");
        alert("Dados necessários não encontrados. Por favor, preencha os dados novamente.");
        return;
    }

    // Prepara os dados para envio
    const data = {
        nome: nomeCliente,
        cpf: cpf,
        email: email,
        telefone: telefone,
        endereco: `${cepDigitado.logradouro}, ${cepDigitado.bairro}, ${cepDigitado.localidade} - ${cepDigitado.uf}`,
        servico: servico
    };

    // Envia os dados para o servidor
    fetch('/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        if (responseData.success) {
            alert("Cadastro realizado com sucesso!");
        } else {
            alert("Erro ao realizar o cadastro: " + responseData.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Erro ao realizar o cadastro: " + error.message);
    });
});
