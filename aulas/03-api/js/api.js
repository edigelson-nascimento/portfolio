// SELECIONA os elementos do DOM
const carregarBtn = document.querySelector('#carregar');
const resultadoList = document.querySelector('#resultado');

// ADICIONA evento de clique ao botão
carregarBtn.addEventListener('click', () => {
    // fetch(): função nativa do JS para fazer requisições HTTP
    // Retorna uma Promise (programação assíncrona)
    fetch('https://jsonplaceholder.typicode.com/users')
        // .then() executa quando a Promise é resolvida
        // response.json(): converte a resposta para objeto JS
        .then(response => response.json())
        // RECEBE os dados convertidos (array de usuários)
        .then(data => {
            // LIMPA a lista antes de adicionar os novos itens
            resultadoList.innerHTML = '';
            // PERCORRE cada usuário retornado pela API
            data.forEach(user => {
                // CRIA um elemento <li> para cada usuário
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                // ADICIONA o <li> à lista no HTML
                resultadoList.appendChild(listItem);
            });
        })
        // .catch() captura erros de rede ou requisição
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
