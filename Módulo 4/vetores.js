// VETORES - Funções e ARROW FUNCTIONS
const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function(item){
    return { original: item, dobrado: item * 2 }
})
console.log(vetor, dobrado)

//------

const pares = vetor.filter(function(item){
    return item % 2 === 0
})
console.log('Pares: ', pares)

const paresDobrados = vetor.filter(function(item){
    return item % 2 === 0
}).map(function(item){
    return item * 2
})
// Faz tudo que a função de pares faz e ...
// no final mapeia os valores encontrados e multiplica por 2
console.log('Pares dobrado: ', paresDobrados)

//-----------------
// Isso pode ser simplificado em 1 linha com... 
// ARROW FUNCTION

const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log('Pares dobrado (Arrow Function): ', paresDobrado)
//--------
const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar, 0)
console.log('Somar com reduce', somatorio)

// Faz a soma dos valores pares do vetor
// IMPORTANTE: 
// filter, map, reduce são todas HIGH ORDER FUNCTIONS 
// (Funções que recebem outras funções)
