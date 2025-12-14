const formRegistro = document.getElementById('registroForm');

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        cedula: document.getElementById('cedula').value,
        fechaNac: document.getElementById('fecha').value,
        email: document.getElementById('email').value.toLowerCase(),
        direccion: document.getElementById('direccion').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };

    // Validación de duplicado
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exist = users.find(u => u.email === user.email);

    if (exist) {
        alert("Este correo ya está registrado.");
        return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
});

