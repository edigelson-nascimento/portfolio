// SELECIONA todos os elementos com a classe "produto"
const botoes = document.querySelectorAll('.produto');

// PERCORRE cada botão e adiciona um evento de clique
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // CAPTURA os valores dos atributos data-* do botão clicado
        const id = botao.getAttribute('data-id');
        const nome = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');

        // EXIBE as informações no console do navegador
        console.log(`ID: ${id}, Nome: ${nome}, Preço: ${preco}`);
    });
});
