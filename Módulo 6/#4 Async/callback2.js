const fs = require('fs')

console.log('inicio')

console.log(fs.readdirSync('./'))
// Método de execução síncrona: 
// Executa em sincronia com a verticalidade do código.

// Obs: Caso o readdirsync demorasse muito para responder a thread ficaria parada até ser executada;
// O que mataria a performance.
console.log('fim')