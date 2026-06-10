async function carregarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Erro ao carregar os usuários');
        }
        const dadosUsuarios = await response.json();
        console.log(dadosUsuarios);
    } catch (error) {
        console.error('Erro:', error);
    }
}
carregarUsuarios();
