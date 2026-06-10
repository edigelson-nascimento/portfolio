function salvarNome() {
    const nomeInput = document.getElementById('nome');
    const nome = nomeInput.value;
    sessionStorage.setItem('nome', nome);
    alert('Nome salvo no sessionStorage!');
}
