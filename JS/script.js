const screens = document.querySelectorAll('.screen');
const navPublic = document.getElementById('nav-public');
const navPrivate = document.getElementById('nav-private');
const navBack = document.getElementById('nav-back');
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

function currentUser() {
    return localStorage.getItem('currentUser');
}

/* =====================
   NAVEGACIÓN
===================== */
function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    navPublic.classList.add('hidden');
    navPrivate.classList.add('hidden');
    navBack.classList.add('hidden');

    if (id === 'login' || id === 'register') {
        navBack.classList.remove('hidden');
    } else if (isLogged()) {
        navPrivate.classList.remove('hidden');
    } else {
        navPublic.classList.remove('hidden');
    }
}

function goHome() { showScreen('welcome'); }
function goLogin() { showScreen('login'); }
function goRegister() { showScreen('register'); }

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
    if (users.some(u => u.user === user || u.mail === mail)) {
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
    greeting.textContent = `Hola, ${currentUser()}`;
    showScreen('private');
    loadTasks(); // ⬅️ ETAPA 3
}

/* =====================
   LOGOUT
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
    goHome();
}

/* =====================
   ETAPA 3 – TO DO LIST
===================== */

function taskKey() {
    return `tasks_${currentUser()}`;
}

function getTasks() {
    return JSON.parse(localStorage.getItem(taskKey())) || [];
}

function saveTasks(tasks) {
    localStorage.setItem(taskKey(), JSON.stringify(tasks));
}

function loadTasks() {
    const list = document.getElementById('task-list');
    if (!list) return;

    list.innerHTML = "";
    const tasks = getTasks();

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = "task-item";
        if (task.done) li.classList.add('done');

        li.innerHTML = `
            <span onclick="toggleTask(${index})">${task.text}</span>
            <button onclick="deleteTask(${index})">✕</button>
        `;

        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('task-input');
    const text = input.value.trim();

    if (text === "") return;

    const tasks = getTasks();
    tasks.push({ text, done: false });
    saveTasks(tasks);

    input.value = "";
    loadTasks();
}

function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].done = !tasks[index].done;
    saveTasks(tasks);
    loadTasks();
}

/* =====================
   AUTOLOGIN
===================== */
document.addEventListener('DOMContentLoaded', () => {
    isLogged() ? loadPrivate() : goHome();
});





















