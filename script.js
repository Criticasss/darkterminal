let timeLeft = 5;
let timerInterval;
let correctWire;

const MAINTENANCE_MODE = false;

// Inicializar progreso
if (!localStorage.getItem("progress")) {
    localStorage.setItem("progress", 1);
}

// Desbloqueo niveles
document.addEventListener("DOMContentLoaded", () => {
    const progress = parseInt(localStorage.getItem("progress"));

    const lvl2 = document.getElementById("lvl2");
const lvl3 = document.getElementById("lvl3");
const lvl4 = document.getElementById("lvl4");

if (lvl2 && progress < 2) lvl2.disabled = true;
if (lvl3 && progress < 3) lvl3.disabled = true;
if (lvl4 && progress < 4) lvl4.disabled = true;
});

// Navegación
function goToLevel(level) {
    window.location.href = `nivel${level}.html`;
}

function goMenu() {
    window.location.href = "index.html";
}

// Reset
function resetGame() {
    localStorage.setItem("progress", 1);
    location.reload();
}

// NIVEL 1
function checkLevel1() {
    const input = document.getElementById("answer").value;
    const msg = document.getElementById("message");

    if (input === "1234") {
        success(msg, ">> ACCESS GRANTED");
        unlock(2);
        setTimeout(() => window.location.href = "nivel2.html", 1200);
    } else {
        error(msg, ">> ACCESS DENIED");
    }
}

// NIVEL 2
function checkLevel2() {
    const input = document.getElementById("answer").value.toLowerCase();
    const msg = document.getElementById("message");

    if (input === "help") {
        success(msg, ">> ACCESS GRANTED");
        unlock(3);
        setTimeout(() => window.location.href = "nivel3.html", 1200);
    } else {
        error(msg, ">> ACCESS DENIED");
    }
}

// NIVEL 3
function checkLevel3() {
    const input = document.getElementById("answer").value.toLowerCase();
    const msg = document.getElementById("message");

    if (input === "shadow") {
        success(msg, ">> ACCESO OCULTO DETECTADO");
        unlock(4);
        setTimeout(() => window.location.href = "nivel4.html", 1200);
    } else {
        error(msg, ">> NO ENCONTRADO");
    }
}

// NIVEL 4
function checkLevel4() {
    const input = document.getElementById("answer").value;
    const msg = document.getElementById("message");

    if (input === "32") {
        success(msg, ">> ACCESS GRANTED");
        unlock(5);

        setTimeout(() => {
            window.location.href = "nivel5.html";
        }, 1200);

    } else {
        error(msg, ">> ACCESS DENIED");
    }
}

// NIVEL 5
function checkLevel5() {
    const input = document.getElementById("answer").value.toLowerCase();
    const msg = document.getElementById("message");

    if (input === "secreto") {
        success(msg, ">> ACCESS GRANTED");
        unlock(6);
        setTimeout(() => window.location.href = "nivel6.html", 1200);
    } else {
        error(msg, ">> ACCESS DENIED");
    }
}

// NIVEL 6
function checkLevel6() {
    const input = document.getElementById("answer").value;
    const msg = document.getElementById("message");

    if (input === "777") {
        success(msg, ">> ACCESS GRANTED");
        unlock(7);
        setTimeout(() => window.location.href = "nivel7.html", 1200);
    } else {
        error(msg, ">> DENIED");
    }
}

// Fake search
function searchSystem() {
    const input = document.getElementById("search").value.toLowerCase();
    const result = document.getElementById("result");

    if (input === "blackout protocol") {
        result.innerText = "RESULTADO: KEY DETECTED -> final_access";
    } else {
        result.innerText = "no results found in database...";
    }
}

//NIVEL 7
function checkLevel7() {
    const input = document.getElementById("answer").value.toLowerCase();
    const msg = document.getElementById("message");

    if (input === "final_access") {
        success(msg, ">> SYSTEM OVERRIDE COMPLETE");
        unlock(8);

        setTimeout(() => {
    window.location.href = "nivel8.html";
}, 1200);

    } else {
        error(msg, ">> ACCESS DENIED");
    }
}

// NIVEL 8
function setRandomWire() {
    const wires = ["rojo", "azul", "verde"];
    correctWire = wires[Math.floor(Math.random() * wires.length)];
}

function startTimer() {
    const timer = document.getElementById("timer");

    timerInterval = setInterval(() => {
        timeLeft--;
        timer.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            explode();
        }
    }, 1000);
}

function cutWire(color) {
    const msg = document.getElementById("message");

    if (color === correctWire) {
        clearInterval(timerInterval);

        msg.innerText = "✔ BOMBA DESACTIVADA";

        setTimeout(() => {
            window.location.href = "nivel9.html";
        }, 800);

    } else {
        explode();
    }
}

function explode() {
    const msg = document.getElementById("message");

    clearInterval(timerInterval);

    msg.innerText = "💥 BOOM!";

    setTimeout(() => {
        window.location.reload();
    }, 1500);
}

window.onload = function () {

    // 👇 SOLO AÑADE ESTO
    if (document.getElementById("timer")) {
        setRandomWire();
        startTimer();
    }
};

// NIVEL 9
function talkToAI() {

    const input =
        document.getElementById("aiInput")
        .value
        .toLowerCase();

    const response =
        document.getElementById("aiResponse");

    const msg =
        document.getElementById("message");

    // HELP

    if (input === "help") {

        response.innerText =
            ">> identifica quién eres.";

    }

    // ACCESS

    else if (input === "access") {

        response.innerText =
            ">> acceso solo para root.";

    }

    // ROOT

    else if (input === "root") {

        response.innerText =
            ">> identidad incompleta.";
    }

    // IAM

    else if (input === "i am") {

        response.innerText =
            ">> continúa...";
    }

    // RESPUESTA FINAL

    else if (input === "i am root") {

        msg.innerText =
            "✔ IA DESACTIVADA";

        setTimeout(() => {
            window.location.href = "nivel10.html";
        }, 1200);
    }

    // RANDOM

    else {

        response.innerText =
            ">> comando desconocido.";
    }
}

//NIVEL 10
function checkLevel10() {

    const input =
        document.getElementById("answer")
        .value
        .toLowerCase();

    const msg =
        document.getElementById("message");

    const userID =
        localStorage.getItem("userID");

    // mostrar ID en pantalla
    const box =
        document.getElementById("userIdBox");

    if (box && userID) {
        box.innerText = userID;
    }

    if (!userID) {

        msg.innerText =
            ">> SIN IDENTIDAD";

        return;
    }

    // RESPUESTA CORRECTA
    if (input === "confirmo acceso") {

        msg.innerText =
            "✔ IDENTIDAD VERIFICADA";

        setTimeout(() => {
            window.location.href = "final.html";
        }, 1200);

    } else {

        msg.innerText =
            ">> ACCESO DENEGADO";
    }
}

// Feedback
function success(el, text) {
    el.textContent = text;
    el.style.color = "#00ff00";
    playSound(true);
}

function error(el, text) {
    el.textContent = text;
    el.style.color = "#ff0033";
    el.classList.add("shake");
    setTimeout(() => el.classList.remove("shake"), 300);
    playSound(false);
}

// Desbloquear
function unlock(level) {
    localStorage.setItem("progress", level);
}


// Pistas
function showHint(level) {
    let hint = "";

    if (level === 1) hint = ">> combinación clásica...";
    if (level === 2) hint = ">> usa tabla ASCII...";
    if (level === 3) hint = ">> inspecciona el código fuente...";
    if (level === 4) hint = ">> se duplica...";
    if (level === 5) hint = ">> código cifrado en base64";
    if (level === 6) hint = ">> abre la consola del navegador (F12)";

    alert(hint);
}

// Sonido
function playSound(success) {
    const audio = new Audio(success
        ? "https://www.soundjay.com/buttons/sounds/button-3.mp3"
        : "https://www.soundjay.com/buttons/sounds/button-10.mp3"
    );
    audio.play();
}

function findKey() {
    console.log("KEY DETECTED: 777");
}

function restartGame() {
    window.location.href = "index.html";
}

// INTRO
window.addEventListener("load", () => {

    const introSeen = localStorage.getItem("introSeen");

    if (introSeen === "true") {
        const intro = document.getElementById("introScreen");

        if (intro) {
            intro.style.display = "none";
        }
    }
});

function closeIntro() {
    localStorage.setItem("introSeen", "true");

    document.getElementById("introScreen").style.display = "none";
}

// CREAR CUENTA
function createAccount() {

    const randomID =
        String(Math.floor(1000 + Math.random() * 9000));

    // guardar ID
    localStorage.setItem("userID", randomID);

    // mostrar mensaje
    document.getElementById("loginMessage")
        .innerText =
        ">> ID creada: " + randomID;

    console.log("ID GUARDADA:", randomID);
}

// LOGIN
function login() {

    const input =
        document.getElementById("loginInput")
        .value
        .trim();

    const savedID =
        localStorage.getItem("userID");

    console.log("INPUT:", input);
    console.log("GUARDADA:", savedID);

    if (input === savedID) {

        document.getElementById("loginScreen")
            .style.display = "none";

        showUserID();

    } else {

        document.getElementById("loginMessage")
            .innerText =
            ">> ID incorrecta";
    }
}

// MOSTRAR ID
function showUserID() {

    const savedID =
        localStorage.getItem("userID");

    document.getElementById("userIDDisplay")
        .innerText = savedID;
}

//AUTO LOGIN
window.addEventListener("load", () => {

    const savedID =
        localStorage.getItem("userID");

    if (savedID) {

        document.getElementById("loginMessage")
            .innerText =
            ">> introduce tu ID";
    }
});


//ADMIN PANEL
let code = "";

function openAdminPanel() {
    document.getElementById("adminModal").style.display = "block";
}

function pressKey(num) {
    code += num;
    document.getElementById("codeInput").value = code;
}

function clearCode() {
    code = "";
    document.getElementById("codeInput").value = "";
}

function checkCode() {

    if (code === "3232") {

        window.location.href = "admin.html";

    } else {

        alert("ACCESS DENIED");

        clearCode();
    }
}

function openAdminTools() {

    const box = document.getElementById("chat");

    box.innerHTML += `<p style="color:red">[SYSTEM] ADMIN ACCESS GRANTED</p>`;
}

//MENSAJES ADMIN
async function sendAdminMessage() {

    const fb = window.firebaseDB;

    const text = document.getElementById("adminMessage").value.trim();

    if (!text) return;

    await fb.addDoc(
        fb.collection(fb.db, "messages"),
        {
            text: "[ADMIN] " + text,
            time: Date.now()
        }
    );

    document.getElementById("adminMessage").value = "";

    // 🔥 borrar solo visualmente después de 5s
    setTimeout(() => {

        const box = document.getElementById("chatBox");

        if (!box) return;

        const messages = box.querySelectorAll("p");

        const lastMessage = messages[messages.length - 1];

        if (lastMessage) {
            lastMessage.remove();
        }

    }, 5000);
}

function listenMessages() {

    const fb = window.firebaseDB;

    const q = fb.query(
        fb.collection(fb.db, "messages"),
        fb.orderBy("time")
    );

    fb.onSnapshot(q, (snapshot) => {

        const box = document.getElementById("chatBox");

        if (!box) return;

        box.innerHTML = "";

        snapshot.forEach((doc) => {

            const msg = doc.data();

            box.innerHTML += `<p>> ${msg.text}</p>`;
        });
    });
}

window.addEventListener("load", listenMessages);

//USUARIOS ONLINE
async function setUserOnline() {

    const fb = window.firebaseDB;

    const userId =
        localStorage.getItem("darkTerminalID");

    if (!userId) return;

    await fb.addDoc(
        fb.collection(fb.db, "onlineUsers"),
        {
            id: userId,
            time: Date.now()
        }
    );
}

function listenOnlineUsers() {

    const fb = window.firebaseDB;

    fb.onSnapshot(

        fb.collection(fb.db, "onlineUsers"),

        (snapshot) => {

            document.getElementById(
                "onlineCount"
            ).innerText =
            "ONLINE USERS: " + snapshot.size;
        }
    );
}

window.addEventListener("load", () => {

    setUserOnline();

});


if (MAINTENANCE_MODE) {
    window.location.href = "mantenimiento.html";
}
