alert("Bem-vindo ao nosso site!");
let nome = prompt("Qual é o seu nome?");
console.log("Olá, " + nome + "! Bem-vindo ao nosso site.");
let idade = prompt("Qual é a sua idade?");
if (parseInt(idade) < 18) {
    alert("Desculpe, mas este site é apenas para maiores de 18 anos.");
} else {
    alert("Bem-vindo ao nosso conteúdo adulto!");
}
alert("Olá, " + nome + "! Esperamos que você aproveite sua visita.");
let proximaIdade = parseInt(idade) + 1;
alert("No próximo ano, você terá " + proximaIdade + " anos.");
