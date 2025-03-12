// Mosca dibujando el corazón
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let t = 0;
function drawHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= t; i += 0.01) {
        let x = 300 + 100 * (Math.pow(Math.sin(i), 3));
        let y = 300 - 100 * (0.8125 * Math.cos(i) - 0.3125 * Math.cos(2*i) - 0.125 * Math.cos(3*i) - 0.0625 * Math.cos(4*i));
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    if (t < 6.28) {
        t += 0.05;
        requestAnimationFrame(drawHeart);
    }
}
drawHeart();

// Animación de texto con efecto máquina de escribir
const texto = "ERESSSS EL AMORRRR DE MI VIDAAAAAAA";
let index = 0;
const textoElemento = document.getElementById("texto");

function escribirTexto() {
    if (index < texto.length) {
        textoElemento.textContent += texto[index];
        index++;
        setTimeout(escribirTexto, 100);
    } else {
        textoElemento.style.borderRight = "none"; // Quitar el cursor después de escribir
    }
}

setTimeout(escribirTexto, 2000);

// Crear corazones flotando
const fondoCorazones = document.querySelector(".fondo-corazones");

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤️";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 y 5 segundos
    fondoCorazones.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);
