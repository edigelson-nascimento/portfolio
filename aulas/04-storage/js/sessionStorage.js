// FUNÇÃO chamada pelo onclick no HTML
function salvarNome() {
    // CAPTURA o elemento de input pelo id
    const nomeInput = document.getElementById('nome');
    // OBTÉM o valor digitado pelo usuário
    const nome = nomeInput.value;

    // sessionStorage.setItem(): salva um dado no armazenamento local
    // Parâmetros: (chave, valor)
    sessionStorage.setItem('nome', nome);

    alert('Nome salvo no sessionStorage!');
}
