// Generar estrellas de fondo automáticamente
document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById('screen-login');
  for (let i = 0; i < 50; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 3 + "px";
      star.style.width = size;
      star.style.height = size;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty('--d', (Math.random() * 3 + 2) + 's');
      screen.appendChild(star);
  }
});

function doLogin() {
  const user = document.getElementById('inp-user').value;
  const pass = document.getElementById('inp-pass').value;
  const error = document.getElementById('login-error');

  if (user === "admin" && pass === "1234") {
      alert("¡Acceso concedido!");
      // Aquí redirigirías al salón
  } else {
      error.style.color = "red";
      error.textContent = "Usuario o contraseña incorrectos";
  }
}
