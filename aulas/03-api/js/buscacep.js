const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btn-cep');
const resultado = document.getElementById('resultado');
btnCep.addEventListener('click', async () => {
    const cep = inputCep.value.trim();
    if (!cep) {
        resultado.textContent = 'Por favor, digite um CEP.';
        return;
    }
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            resultado.textContent = 'CEP não encontrado.';
        } else {
            resultado.textContent = `Endereço: ${data.logradouro}, Bairro: ${data.bairro}, Cidade: ${data.localidade} - ${data.uf}`;
        }
    } catch (error) {
        console.error('Erro:', error);
        resultado.textContent = 'Erro de conexão ao buscar o CEP.';
    }
});
