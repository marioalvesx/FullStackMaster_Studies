// Variáveis e tipos - LET e CONST;

// Javascript é clike

valor = 10
if (valor === 10){ 
    // Os três iguais verificam se a variável é do mesmo tipo e do mesmo valor;
}

// --------

valor = '10'
if (valor == 10){ 
    // Verifica se o valor é igual apenas
    // Ex: Se variável por string, ele converte e ve se é igual
}

// --------

const valor1 = '10'
// Variável tem valor constante, não muda mesmo que inserido um valor novo;

// --------

let valor2 = '20'
// Variável tem valor que pode ser alterado manualmente, pode ser atribuido;

console.log(valor1, valor2);

const objeto = {
    chave: 'valor1',
    chave2: 'valor2'
}
console.log(objeto)

// In JS Functions are FIRST CLASS CITIZENS
// Ou seja, são tipos de variáveis como Inteiros, Strings ou semelhantes.
const soma = function(a, b){
    return a + b
}
console.log("Function SOMA: "+soma(1,2))

const calculadora = function(op, a, b){
    return op(a, b)
}

console.log(calculadora(soma, 1,2))
// Passo soma COMO UMA VARIÁVEL para a funcão calculadora;

