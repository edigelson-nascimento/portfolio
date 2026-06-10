// CAPTURA os elementos do DOM
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

// ADICIONA evento de clique com função assíncrona
botao.addEventListener('click', async () => {
    // FEEDBACK visual: avisa que a requisição está em andamento
    resultado.textContent = 'Carregando...';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // VALIDA se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar os usuários');
        }

        const dadosUsuarios = await response.json();

        // EXIBE nome e email no parágrafo de resultado
        resultado.textContent = `Nome: ${dadosUsuarios.name}, Email: ${dadosUsuarios.email}`;
    } catch (error) {
        // EXIBE a mensagem de erro no lugar do resultado
        resultado.textContent = `Erro: ${error.message}`;
    }
});
