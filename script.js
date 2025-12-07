// Saidas
let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')
let mile = document.getElementById('milessegundo')

// Indices
indice = 0 // Inidice geral
index = 1 // Esse é dos milessegundos
min = 1 // Esse é dos minutos
hor = 1 // Esse é das horas

// Função Iniciar
function iniciar() {
    tempo = setInterval(function(){
        indice++
        
        mile.innerText = String(mile.innerText = (indice)).padStart(2, '0')

        if (indice == 10 ) {
            indice = 0
            s.innerText = String(s.innerText = (index++)).padStart(2, '0')
            return
        }else if (index == 59) {
            index = 0
            m.innerText = String(m.innerText = (min++)).padStart(2, '0') 
            return
        }else if (min == 59) {
            min = 0
            h.innerText = String(h.innerText = (hor++)).padStart(2, '0')
            return
        }

    }, 100)
}

    // Função Pausar
    function pausar() {
        clearInterval(tempo)
    }

    // Função de Reset 
    function reset() {
        
    }