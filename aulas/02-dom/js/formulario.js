// SELECIONA o formulário pelo id "myForm"
const form = document.querySelector('#myForm');

// INTERCEPTA o evento de submit (envio) do formulário
form.addEventListener('submit', function(event) {
    // PREVINE o comportamento padrão (recarregar a página)
    event.preventDefault();

    // CAPTURA o valor digitado no campo de nome
    const nameInput = document.querySelector('#name');

    // EXIBE o nome digitado em um alerta
    alert('Nome: ' + nameInput.value);
});
