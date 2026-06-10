// CAPTURA os elementos do DOM
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btn-cep');
const resultado = document.getElementById('resultado');

// ADICIONA evento de clique ao botão de busca
btnCep.addEventListener('click', async () => {
    // CAPTURA o valor digitado e remove espaços em branco (.trim())
    const cep = inputCep.value.trim();

    // VALIDA se o campo não está vazio
    if (!cep) {
        resultado.textContent = 'Por favor, digite um CEP.';
        return; // interrompe a execução
    }

    try {
        // FAZ a requisição para a API gratuita ViaCEP
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        // VERIFICA se o CEP é inválido (API retorna "erro": true)
        if (data.erro) {
            resultado.textContent = 'CEP não encontrado.';
        } else {
            // MONTA e exibe o endereço completo
            resultado.textContent = `Endereço: ${data.logradouro}, Bairro: ${data.bairro}, Cidade: ${data.localidade} - ${data.uf}`;
        }
    } catch (error) {
        // ERRO de rede ou servidor indisponível
        console.error('Erro:', error);
        resultado.textContent = 'Erro de conexão ao buscar o CEP.';
    }
});
