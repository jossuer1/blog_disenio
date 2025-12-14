document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Buscar si el usuario existe
    const userFound = users.find(u =>
        u.email === email && u.password === password
    );

    console.log("Usuarios registrados:", users);
    console.log("Usuario ingresado:", email, password);

    if (!userFound) {
        alert("Usuario o contraseña incorrecta");
        return;
    }

    alert("Inicio de sesión exitoso ");
    window.location.href = "dashboard.html";
});

document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        this.textContent = "Mostrar";
    }
    
})

