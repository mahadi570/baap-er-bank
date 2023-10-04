document.getElementById("login-btn").addEventListener('click', function () {
    let loginEmail = document.getElementById('login-email').value;

    let loginPassword = document.getElementById('login-password').value;

    if (loginEmail === 'test@mail.com' && loginPassword === 'testPassword') {
        window.location= 'dashboard.html';
    }
    else {
        alert('Wrong Email or Passwoord!!!');
    }
});