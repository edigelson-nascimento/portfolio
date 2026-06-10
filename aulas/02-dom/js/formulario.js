const form = document.querySelector('#myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.querySelector('#name');
    alert('Nome: ' + nameInput.value);
});
