const screens = document.querySelectorAll('.screen');
const navPublic = document.getElementById('nav-public');
const navPrivate = document.getElementById('nav-private');
const greeting = document.getElementById('user-greeting');
const logoutModal = document.getElementById('logout-confirm');

/* =====================
   UTILIDADES
===================== */

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function isLogged() {
    return localStorage.getItem('logged') === 'true';
}

/* =====================
   NAVEGACIÓN SPA
===================== */

function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    // Ocultar botones del header según pantalla
    if (id === 'login' || id === 'register') {
        navPublic.classList.add('hidden');
    } else if (!isLogged()) {
        navPublic.classList.remove('hidden');
    }
}

function goHome() {
    showScreen('welcome');
}

function goLogin() {
    showScreen('login');
}

function goRegister() {
    showScreen('register');
}

function goPrivate() {
    if (!isLogged()) {
        goHome();
        return;
    }
    showScreen('private');
}

/* =====================
   LOGOUT MODAL
===================== */

function confirmLogout() {
    logoutModal.classList.add('active');
}

function closeLogout() {
    logoutModal.classList.remove('active');
}

function logout() {
    localStorage.removeItem('logged');
    localStorage.removeItem('currentUser');

    logoutModal.classList.remove('active');
    navPrivate.classList.add('hidden');
    navPublic.classList.remove('hidden');

    goHome();
}

/* =====================
   REGISTRO
===================== */

function register() {
    const user = document.getElementById('reg-user').value.trim();
    const mail = document.getElementById('reg-mail').value.trim();
    const pass = document.getElementById('reg-pass').value;
    const confirm = document.getElementById('reg-pass-confirm').value;
    const msg = document.getElementById('register-msg');

    msg.textContent = "";

    if (!user || !mail || !pass || !confirm) {
        msg.textContent = "Completá todos los campos.";
        return;
    }

    if (pass.length < 6) {
        msg.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    if (pass !== confirm) {
        msg.textContent = "Las contraseñas no coinciden.";
        return;
    }

    const users = getUsers();
    const exists = users.some(u => u.user === user || u.mail === mail);

    if (exists) {
        msg.textContent = "Usuario o email ya registrado.";
        return;
    }

    users.push({ user, mail, pass });
    saveUsers(users);

    localStorage.setItem('logged', 'true');
    localStorage.setItem('currentUser', user);

    loadPrivate();
}

/* =====================
   LOGIN
===================== */

function login() {
    const identifier = document.getElementById('login-identifier').value.trim();
    const pass = document.getElementById('login-pass').value;
    const error = document.getElementById('login-error');

    error.textContent = "";

    const users = getUsers();
    const found = users.find(
        u =>
            (u.user === identifier || u.mail === identifier) &&
            u.pass === pass
    );

    if (!found) {
        error.textContent = "Usuario, email o contraseña incorrectos.";
        return;
    }

    localStorage.setItem('logged', 'true');
    localStorage.setItem('currentUser', found.user);

    loadPrivate();
}

/* =====================
   SESIÓN PRIVADA
===================== */

function loadPrivate() {
    if (!isLogged()) {
        goHome();
        return;
    }

    navPublic.classList.add('hidden');
    navPrivate.classList.remove('hidden');
    greeting.textContent = `Hola, ${localStorage.getItem('currentUser')}`;
    showScreen('private');
}

/* =====================
   AUTOLOGIN
===================== */

if (isLogged()) {
    loadPrivate();
} else {
    goHome();
}










