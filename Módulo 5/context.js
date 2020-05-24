// context == this

// const obj = {
//     var1: 10,
//     get: function(){
//         return var1
//     }
// }
// console.log(obj.get())

// ERRO. Isso não funciona, pois o js não sabe quem é o 'var1'

const obj = {
    var1: 10,
    get: function(){
        return this.var1
    }
}
console.log(obj.get.bind({ var1: 20 })())

// Certo. Mesma caracteristica das linguagens orientadas a objetos;

/* Contexto é o this. Nesse caso o contexto do objeto 'obj'.apiOnly()
console.log(obj.get.bind({ var1: 20 })())

*/


// Nesse caso, o valor inicial atribuido, 10, não é certeza que fica gravado. Por isso é facilmente manipulado.
// Quanto menos usar o this no código, mais funcional ele torna.
