// Forma para a variável lembrar onde foi criada, executada;

function func1(){
    let contador = 0

    return function(){
        contador++
        return contador
    }
}
const func = func1()
console.log(func())

// console.log(func()) -->  Cada nova execução é incrementado um valor;
    /* Mantém o escopo de onde foi criado. 
        Com o Closure é travado onde está o contexto
    */
// console.log(func()) --> Incrementado mais um valor

function func2(initial){
    let contador = initial

    return function(){
        contador++
        return contador
    }
}
const func02 = func2()
console.log(func02())

// -------------

function animal(name){
    let count = 0

    return {    // Código isolado
        getCount: function(){
            return count
        }, 
        increment: function(){
            count++
        },
        getName: function(){
            return name
        }
    }
}

const gato = animal('gato')
gato.increment
console.log(gato.getCount(), gato.getName())

const cachorro = animal('cachorro')
cachorro.increment()
console.log(cachorro.getName(), cachorro.getCount())