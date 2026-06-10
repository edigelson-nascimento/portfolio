// FUNÇÃO assíncrona que carrega dados de um usuário específico
async function carregarUsuarios() {
    try {
        // FAZ a requisição para a API (usuário com id = 1)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // VALIDA se a resposta foi bem-sucedida (status HTTP 200-299)
        // response.ok retorna true se o status for de sucesso
        if (!response.ok) {
            // throw new Error: lança um erro personalizado
            throw new Error('Erro ao carregar os usuários');
        }

        // SÓ converte para JSON se a resposta for válida
        const dadosUsuarios = await response.json();
        console.log(dadosUsuarios);
    } catch (error) {
        // CAPTURA tanto erros de rede quanto erros lançados com throw
        console.error('Erro:', error);
    }
}

carregarUsuarios();
