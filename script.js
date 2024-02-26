document.getElementById('resetPassword').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace abra la URL
    document.getElementById('resetPasswordForm').style.display = 'block';
});

document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace abra la URL
    document.getElementById('registerForm').style.display = 'block';
});