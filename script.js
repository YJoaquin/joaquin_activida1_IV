document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        event.preventDefault(); // Previene el envío del formulario
    } else if (!validateEmail(email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}