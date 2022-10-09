// Register Form
var registerForm = document.getElementById('register-form');
var openRegisterForm = document.getElementById('register-button');
var closeRegisterForm = document.getElementById('close-register-modal')
var switchToLogin = document.getElementById("switch-login")

switchToLogin.addEventListener('click', function() {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
}) 

openRegisterForm.addEventListener('click',function() {
    modal.style.display='flex';
    registerForm.style.display='block';
})

closeRegisterForm.addEventListener('click',function() {
    modal.style.display='none';
    registerForm.style.display='none';
})

// Login Form 
var modal = document.getElementById('modal');

var loginForm = document.getElementById('login-form');
var openLoginForm = document.getElementById('login-button');
var closeLoginForm = document.getElementById('close-login-modal')
var switchToRegister = document.getElementById("switch-register")

switchToRegister.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}) 

openLoginForm.addEventListener('click',function() {
    modal.style.display= 'flex';
    loginForm.style.display= 'block';
})

closeLoginForm.addEventListener('click',function() {
    modal.style.display='none';
    loginForm.style.display='none';
})

