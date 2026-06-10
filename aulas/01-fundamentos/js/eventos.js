// FUNÇÃO chamada pelo onclick no HTML
function boasVindas() {
    alert("Bem-vindo ao nosso site!");
}

// addEventListener: método que vincula um evento a um elemento
// EVENTO: clique em qualquer lugar da página
document.addEventListener("click", function() {
    alert("Você clicou na página!");
});

// EVENTO: mouse passando sobre a página (dispara várias vezes)
document.addEventListener("mouseover", function() {
    console.log("O mouse está sobre a página.");
});

// EVENTO: tecla pressionada no teclado
// O parâmetro "event" contém informações sobre o evento ocorrido
document.addEventListener("keydown", function(event) {
    console.log("Você pressionou a tecla: " + event.key);
});
