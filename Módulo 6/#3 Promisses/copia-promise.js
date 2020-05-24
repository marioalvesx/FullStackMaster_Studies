
console.log(1)
setTimeout(() => { // Função fica no eventLoop até as outras não assincronas serem concluídas
    console.log("Ola em 2 segundos")
}, 2000) // >> Milisegundos

console.log(2)

let count = 0
let interval = setInterval(() => {
    console.log('ola')
    count++
    if(count > 5 ){
        clearInterval(interval)
    }
}, 1000)    // Executa o "ola" a cada um segundo, sem parar

let interval2 = setInterval(() => {
    console.log('ola2')
    count++
    if(count > 15){
        clearInterval(interval2)
    }
}, 1000)    // Executa o "ola" a cada um segundo, sem parar
console.log(3)

