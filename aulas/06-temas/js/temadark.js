// FUNÇÃO que alterna o tema entre claro e escuro
function toggleDarkMode() {
    // classList.toggle(): adiciona a classe se não existir,
    // ou remove se já existir (alterna)
    document.body.classList.toggle("dark-mode");
}

// CRIA um elemento <style> dinamicamente via JS
const style = document.createElement('style');
// DEFINE as regras CSS para o modo escuro
style.innerHTML = `
    body.dark-mode {
        background-color: #333;  /* fundo escuro */
        color: #fff;             /* texto branco */
    }
`;
// ADICIONA o estilo ao <head> da página
document.head.appendChild(style);
