function boasVindas() {
    alert("Bem-vindo ao nosso site!");
}
document.addEventListener("click", function() {
    alert("Você clicou na página!");
});
document.addEventListener("mouseover", function() {
    console.log("O mouse está sobre a página.");
});
document.addEventListener("keydown", function(event) {
    console.log("Você pressionou a tecla: " + event.key);
});
