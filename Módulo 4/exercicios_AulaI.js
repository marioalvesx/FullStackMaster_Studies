// Módulo 5 - Exercícios Aula 01

// 1) Dado um vetor de números, como poderia ser realizada 
// a soma de todos os valores utilizando reduce.

const vet = [1,2,3,4,5,2,2,3,4,0,0,0]
const soma = (valor, atual) => valor + atual
const somatorio = vet.reduce(soma, 0)
console.log('Soma de todos os valores de vet: ', somatorio)

// 2) Dado um vetor de números, como poderia ser realizada 
// a soma de todos os valores pares utilizando reduce e filter.

const par = index => index % 2 === 0
const somapares = vet.filter(par).reduce(soma, 0)
console.log('Soma de todos os pares: ', somapares)

// 3) Dado um vetor de números, como poderia ser realizada 
// a soma de todos os valores ímpares utilizando reduce e filter.

const impar = index => index % 2 !== 0
const somaimpares = vet.filter(impar).reduce(soma, 0)
console.log('Soma de todos os impares: ', somaimpares)

// 4) Dado um vetor de valores, retorne um objeto com quantas vezes 
// cada valor está presente no vetor (dica: utilize reduce)

const vetor = [1,2,3,4,5,2,2,3,4,0,0,0, 'mario', 'mario']
const contaitens = (object, item) => {
    if (!object[item]){
        object[item] = 0    // Só passa aqui na 1º vez; se o item que está passando ainda não foi criado
    }
    object[item]++  // ...depois adiciona 1
    return object
}
const itens = vetor.reduce(contaitens, {})
console.log('Número de vezes cada valor se repete: ', itens)

const vetor1 = [12,13,14,15,12,13,16,0,11.2,11.3]
const buscarepetidos = (index, value) => {
    !index[value] ? index[value] = 0 : false
    index[value]++
    return index
}
const qtdrepetidos = vetor1.reduce(buscarepetidos, {})
console.log('Quantidade dos valores repetidos em vetor1:\n ', qtdrepetidos)

// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos
//  do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
// (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)

const vetors = [1,2,3,4,5,2,2,3,4,0,0,0, 'mario', 'mario']
const itensunicos = (agg, val) => {
    if (!agg[val]){
        agg[val] = {
            value: val,
            occur: 0
        }
    }
    agg[val].occur = agg[val].occur + 1
    return agg
}

const contaitensunicos = vetors.reduce(itensunicos, {})
const keys = Object.keys(contaitensunicos)
const unique = keys.filter( key => contaitensunicos[key].occur === 1)
const uniqueValues = unique.map( val => contaitensunicos[val].value)
console.log('Valores que não se repetem: ', uniqueValues)

// 9) Uma função é chamada da seguinte forma:
// calculadora(10, '+', 20)
// crie o corpo da função de forma que ela realize as 4 operações aritméticas

///* Testar READLINE, receber valores do usuário  *///

console.log('CALCULADORA:')
const calculadora = (val1, op, val2) => {
    const ops = {
        '+': (val1, val2) => val1 + val2,
        '-': (val1, val2) => val1 - val2,
        '*': (val1, val2) => val1 * val2,
        '/': (val1, val2) => val1 / val2
    }
    return ops[op](val1, val2)  
}
    // return nas minhas operacoes(ops), capturo em qual 'op', qual posição acontece a operacao algébrica
    // EX: retorno o '+' na primeira posicao e pego os val's enviados como parametros para a fn calculadora
    
    console.log('Resultado da operação: ', calculadora(10, '+', 20))

// 10) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:
const calculadoraFn = (val1, op, val2) => op(val1, val2)
/* Invoco o dado passado por valor 'op' e seto os dois valores para ele, val1 e val2 */

const soma1 = (val1, val2) => val1+val2
const subtra1 = (val1, val2) => val1 - val2
const multi1 = (val1, val2) => val1 * val2
const divi1 = (val1, val2) => val1 / val2
/* IMPORTANTE LEMBRAR: Uma função é um tipo, um FIRST CLASS CITIZEN
Isso é provado logo abaixo, enviando uma função como parametro...
*/
console.log('Resultado da operação SOMA (CalculadoraFN): ', calculadoraFn(20, soma1, 20))
console.log('Resultado da operação SUBTRA (CalculadoraFN): ', calculadoraFn(20, subtra1, 20))
console.log('Resultado da operação MULTI (CalculadoraFN): ', calculadoraFn(20, multi1, 20))
console.log('Resultado da operação DIVI (CalculadoraFN): ', calculadoraFn(20, divi1, 20))

// --------------- //

const calculadoraFn2 = (num1, op, num2) => {
    return op(num1, num2)
}

const soma2 = (num1, num2) => num1 + num2
console.log('CalculadoraFn2 - Resultado da op SOMA: ', calculadoraFn2(10, soma2, 50))