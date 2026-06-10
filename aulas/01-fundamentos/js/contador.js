// VARIÁVEL global que armazena o valor atual do contador
let contador = 0;

// FUNÇÃO para incrementar o contador
function somar() {
    contador++; // aumenta o valor em 1
    // ATUALIZA o texto do elemento <h1> com o novo valor
    document.getElementById("contador").textContent = contador;
}

// FUNÇÃO para decrementar o contador
function subtrair() {
    // IMPEDE que o contador fique negativo
    if (contador <= 0) {
        alert("O contador não pode ser negativo!");
        return; // sai da função sem executar o resto
    }
    contador--; // diminui o valor em 1
    document.getElementById("contador").textContent = contador;
}
