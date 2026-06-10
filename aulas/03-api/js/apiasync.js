// FUNÇÃO assíncrona: a palavra "async" permite usar "await" dentro dela
async function carregarUsuarios() {
    // BLOCO try/catch para tratamento de erros
    try {
        // await: espera a Promise do fetch ser resolvida
        // Enquanto aguarda, o código "pausa" sem travar a página
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        // await novamente para converter a resposta em JSON
        const dados = await response.json();

        // EXIBE o array de usuários no console
        console.log(dados);
    } catch (error) {
        // CAPTURA qualquer erro durante a requisição
        console.error('Erro:', error);
    }
}

// CHAMA a função para executar a requisição
carregarUsuarios();
