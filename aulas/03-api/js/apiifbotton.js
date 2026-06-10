const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');
botao.addEventListener('click', async () => {
    resultado.textContent = 'Carregando...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Erro ao carregar os usuários');
        }
        const dadosUsuarios = await response.json();
        resultado.textContent = `Nome: ${dadosUsuarios.name}, Email: ${dadosUsuarios.email}`;
    } catch (error) {
        resultado.textContent = `Erro: ${error.message}`;
    }
});
