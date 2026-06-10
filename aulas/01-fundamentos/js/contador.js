let contador = 0;
function somar() {
    contador++;
    document.getElementById("contador").textContent = contador;
}
function subtrair() {
    if (contador <= 0) {
        alert("O contador não pode ser negativo!");
        return;
    }
    contador--;
    document.getElementById("contador").textContent = contador;
}
