// SELECIONA todos os botões com a classe "btn-excluir"
// querySelectorAll retorna uma NodeList (semelhante a um array)
const botoesExcluir = document.querySelectorAll('.btn-excluir');

// PERCORRE cada botão encontrado com forEach
botoesExcluir.forEach(botao => {
  // ADICIONA um evento de clique em cada botão
  // async permite usar "await" dentro da função (requisição assíncrona)
  botao.addEventListener('click', async () => {
    // CAPTURA os dados do botão via dataset (data-* attributes)
    const id = botao.dataset.id;      // "10"
    const url = botao.dataset.url;     // "https://jsonplaceholder.typicode.com/posts/10"
    const method = botao.dataset.method; // "DELETE"

    // BLOCO try/catch para tratar erros na requisição
    try {
      // FAZ a requisição DELETE para a API usando fetch
      // A URL completa já está no data-url (incluindo o ID)
      const response = await fetch(`${url}`, { method: "DELETE" });

      // VERIFICA se a resposta foi bem-sucedida (status 200-299)
      if (response.ok) {
        // REMOVE o elemento <li> que envolve o produto da página
        document.querySelector(`#produto-${id}`).remove();
        alert(`Produto ${id} excluído com sucesso!`);
      } else {
        alert(`Erro ao excluir o produto ${id}.`);
      }

    } catch (error) {
      // CAPTURA erros de rede (ex: servidor offline, sem internet)
      console.error('Erro:', error);
      alert('Ocorreu um erro ao tentar excluir o produto.');
    }
  });
});
