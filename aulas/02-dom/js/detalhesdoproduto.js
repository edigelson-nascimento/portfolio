const botoes = document.querySelectorAll('.btn-produto');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');
        document.getElementById('titulo-produto').textContent = `Detalhes do ${nome}`;
        document.getElementById('preco-produto').textContent = `Preço: R$ ${preco}`;
    });
});
