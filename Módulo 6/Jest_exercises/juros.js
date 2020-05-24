// Exercício 1: juros simples
// Crie um módulo juros.js, e exporte dele uma função jurosSimples 
// que recebe C (capital), i (juros em decimal. ex: 3,5% = 0.035) 
// e t (tempo). E retorne o juros simples do período (C * i * t ).

// O objetivo destes exercícios é criarmos módulos e funções dentro destes módulos e testá-los UNITARIAMENTE.

function jurosSimples(C, i, t){
    return jurosSimples = (C * (i / 100.00) * t).toFixed(4);
}

// Exercício 2: montante com juros simples
// Crie uma nova função que dado as mesmas variáveis do exercício anterior, retorne o montante 
// total C + juros simples.

const jurosMontante = ({ jurosSimples }) => (C, i, t) => C + jurosSimples(C, i, t);  // Função alterada para teste da função pura
    
// Exercício 3: montante com juros compostos
// Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo) 
// e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ n​.

function montanteJurosCompostos(C, i, t) {
    return montanteJurosCompostos = (C * (Math.pow(1 + i, t))).toFixed(2);
}


// Exercício 4: juros compostos
// O exercício anterior já retorna o montante (capital + juros). Crie uma função em juros.js que 
// retorne somente os juros. (Isolar capital da função Juros Simples).

const jurosCompostos = ({ montanteJurosCompostos }) => (C, i, t) => montanteJurosCompostos(C, i, t) - C;

module.exports = {
    jurosSimples,
    jurosMontante: jurosMontante({ jurosSimples }), // Função falsa
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
    pure: {
        jurosMontante, // Função pura
        jurosCompostos
    }
}

// Importante: Funções que utilizam outras funções locais é preciso fazer o tratamento de injeção de dependências para poder testar funções unitariamente, ou seja, isoladas das outras, PURAS;
// E quando estou exportando normalmente, já podemos injetar automaticamente.