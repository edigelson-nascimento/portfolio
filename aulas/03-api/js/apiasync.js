async function carregarUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const dados = await response.json();
        console.log(dados);
    } catch (error) {
        console.error('Erro:', error);
    }
}
carregarUsuarios();
