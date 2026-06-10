const carregarBtn = document.querySelector('#carregar');
const resultadoList = document.querySelector('#resultado');
carregarBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            resultadoList.innerHTML = '';
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                resultadoList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erro ao carregar os dados:', error));
});
