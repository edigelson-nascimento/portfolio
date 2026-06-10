function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
const style = document.createElement('style');
style.innerHTML = `
    body.dark-mode {
        background-color: #333;
        color: #fff;
    }
`;
document.head.appendChild(style);
