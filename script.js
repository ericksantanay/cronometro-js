// Saídas
let h = document.getElementById('horas');
let m = document.getElementById('minutos');
let s = document.getElementById('segundos');
let mile = document.getElementById('milessegundo');

// Valores numéricos internos
let ms = 0;
let seg = 0;
let min = 0;
let hor = 0;

let tempo;

// Função Iniciar
function iniciar() {

    // Evita rodar 2 cronômetros ao mesmo tempo
    if (tempo) return;

    tempo = setInterval(function () {

        ms++; // incrementa milissegundo (0–9 simulado)

        // Atualiza milissegundos
        mile.innerText = String(ms).padStart(2, '0');

        // Quando chega em 10 → vira 1 segundo
        if (ms === 10) {
            ms = 0;
            seg++;
            s.innerText = String(seg).padStart(2, '0');
        }

        // 60 segundos → 1 minuto
        if (seg === 60) {
            seg = 0;
            min++;
            m.innerText = String(min).padStart(2, '0');
        }

        // 60 minutos → 1 hora
        if (min === 60) {
            min = 0;
            hor++;
            h.innerText = String(hor).padStart(2, '0');
        }

    }, 100);
}


// Função Pausar
function pausar() {
    clearInterval(tempo);
    tempo = null; // libera pra iniciar de novo
}


// Função Resetar
function resetar() {

    // Valores internos
    ms = 0;
    seg = 0;
    min = 0;
    hor = 0;

    // Interface
    mile.innerText = "00";
    s.innerText = "00";
    m.innerText = "00";
    h.innerText = "00";

    pausar();
}