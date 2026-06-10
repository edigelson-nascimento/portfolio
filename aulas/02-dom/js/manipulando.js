// SELECIONA o elemento <h1> pelo id "titulo"
let titulo = document.getElementById("titulo");

// ALTERA o estilo CSS inline: cor do texto
titulo.style.color = "blue";

// ALTERA o tamanho da fonte
titulo.style.fontSize = "24px";

// SUBSTITUI o texto interno do elemento
titulo.textContent = "Manipulação de Elementos em JavaScript";

// ADICIONA HTML adicional ao final do conteúdo existente
// innerHTML permite inserir tags HTML formatadas
titulo.innerHTML += " <span style='color: red;'>- Editado!</span>";
