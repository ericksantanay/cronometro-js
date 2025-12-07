// Saidas
let h = document.getElementById('horas')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')
let mile = document.getElementById('milessegundo')

indice = 0
index = 1
// Função
function iniciar() {
    setInterval(function(){
        indice++
        
        mile.innerText = String(mile.innerText = (indice)).padStart(2, '0')

        if (indice == 10 ) {
            indice = 0
            s.innerText = index++
            return
        }else if (index == 59) {
            index = 0
            return
        }

        

        

        
    }, 50)
}