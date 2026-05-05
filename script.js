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
    window.location.href = "final.html";
}, 1200);

    } else {
        error(msg, ">> ACCESS DENIED");
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
    localStorage.clear();
    window.location.href = "index.html";
}

if (MAINTENANCE_MODE) {
    window.location.href = "mantenimiento.html";
}