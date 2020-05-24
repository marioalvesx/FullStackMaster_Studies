// 1) Qual o resultado da execução deste trecho de código e porquê?

/* function test() {  ​   
    // Aqui o a fica como: a = undefined
    // Pois o var muda o valor sempre, não tem valor constante
    console.log(a)   
    // Aqui retorna o 2 do return de foo(), pois a declaração 
    // da função acontece desde o começo do bloco do código;
    console.log(foo())
   
    var a = 1   // engine do js sobre o valor do a, que é um var...
    function foo() {    // Aqui a function foo() tambem sobre o seu valor...
       return 2
    }
 }
 
 test() */

//  caracteristica importante do JS: 
/***  var e function sobem a declaração da variável 
 * para o topo do bloco onde ele está.
 * 
 * 
 * 
 */

//  2) Qual o resultado?

var a = 1; 

function someFunction(number) {
  function otherFunction(input) {
    return a
  }
  
  a = 5
  
  return otherFunction;
}

var firstResult = someFunction(9)
var result = firstResult(2)
console.log(firstResult())

// firstResult() mostra 5;
// result não mostra nada pois recebe o valor de firstResult() que não é uma função;

// 3) Qual o resultado? Explique sua resposta.

var fullname = 'Tulio Faria'
var obj = {
   fullname: 'Jose Silva',
   prop: {
      fullname: 'Nome Sobrenome',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname())

var test = obj.prop.getFullname

console.log(test())

// R: O primeiro console.log é resultado da busca no objeto obj, no item prop,
// item getFullName que recebe uma function que retorna o this.fullname que é a variável 
// daquele escopo, daquele objeto.
// o Segundo, mostra undefined pois a variavel test não recebe valor da função getFullName (falta os parenteses indicando a chamada de função)
// sendo assim, test não é uma função e nem recebe valor de uma função, é só uma String indefinida;

// 4) O que sairá no console neste exemplo a seguir:

var a = 1
function b() { 
    a = 10
    return; 
    function a() {} 
} 
b()
console.log(a)

// R: 1
// o a do console.log é o primeiro a declarado. 
// Dentro da function b() o a já é outro, ele passa a ser uma função 
// que é içada para o topo do seu bloco em tempo de parsing.