// EXIBE uma mensagem de boas-vindas assim que a página carrega
alert("Bem-vindo ao nosso site!");

// SOLICITA o nome do usuário via prompt (caixa de entrada)
let nome = prompt("Qual é o seu nome?");

// REGISTRA no console uma saudação personalizada (útil para debug)
console.log("Olá, " + nome + "! Bem-vindo ao nosso site.");

// SOLICITA a idade do usuário
let idade = prompt("Qual é a sua idade?");

// VERIFICA se a idade é menor que 18 usando parseInt para converter string em número
if (parseInt(idade) < 18) {
    alert("Desculpe, mas este site é apenas para maiores de 18 anos.");
} else {
    alert("Bem-vindo ao nosso conteúdo adulto!");
}

// EXIBE uma mensagem final personalizada com o nome do usuário
alert("Olá, " + nome + "! Esperamos que você aproveite sua visita.");

// CALCULA e exibe a idade que o usuário terá no próximo ano
let proximaIdade = parseInt(idade) + 1;
alert("No próximo ano, você terá " + proximaIdade + " anos.");
