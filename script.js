// Saidas
let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')
let mile = document.getElementById('milessegundo')

indice = 0
// Função
function iniciar() {
    setInterval(function(){
        indice++
        mile.innerText = String(mile.innerText = (indice)).padStart(2, '0')

        if(indice == 59) {
            indice = 0
            return
        }

        

        
    }, 10)
}