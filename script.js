let button = document.getElementById('nao-clicar');

let myModal = new bootstrap.Modal(document.getElementById('myModal'));

button.addEventListener('click', function() {
    myModal.show()
});