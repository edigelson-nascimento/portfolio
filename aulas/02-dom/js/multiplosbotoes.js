const botoes = document.querySelectorAll('.produto');
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.getAttribute('data-id');
        const nome = botao.getAttribute('data-nome');
        const preco = botao.getAttribute('data-preco');
        console.log(`ID: ${id}, Nome: ${nome}, Preço: ${preco}`);
    });
});
