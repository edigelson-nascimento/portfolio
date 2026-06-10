// SELECIONA todos os elementos com a classe "btn-produto"
const botoes = document.querySelectorAll('.btn-produto');

// forEach: percorre cada botão encontrado
botoes.forEach(botao => {
    // ADICIONA um evento de clique para cada botão
    botao.addEventListener('click', () => {
        // getAttribute: lê o valor dos atributos data-*
        const nome = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');

        // ATUALIZA os elementos HTML com os dados do produto clicado
        document.getElementById('titulo-produto').textContent = `Detalhes do ${nome}`;
        document.getElementById('preco-produto').textContent = `Preço: R$ ${preco}`;
    });
});
