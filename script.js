document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.textContent = "Por favor, completa todos los campos.";
  } else {
    message.style.color = "green";
    message.textContent = "Formulario enviado correctamente.";
    // Aquí podrías enviar los datos a un servidor si lo deseas
  }
});
