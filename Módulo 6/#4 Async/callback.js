const fs = require('fs')

console.log('inicio')

fs.readdir('./', function(err, lista){ /* callback */
    err ? console.log('erro', err) : console.log(lista)
})

/* 
- Callback: Uma função passada a outra função como parâmetro.
- Sempre envia o primeiro parametro como 'erro';
- Segundo parâmetro é o que deseja retornar.
- Quando é chamado ele fica no Eventloop e executa os dois console.logs
- e depois o callback é chamado por último na execução.
*/

console.log('fim')