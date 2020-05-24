const juros = require('../juros')

// Exercício 1 - teste Juros Simples
test('Juros Simples: ', () => {
    const C = 5;
    const i = 2.05;
    const t = 1;

    const jurosSimples = juros.jurosSimples(C, i, t)

    expect(jurosSimples).toBe('0.1025');
}); // Passed!

// Exercício 2 - teste Juros Montante (Tem função de juros simples junto)
test('Juros Montante', () => {  // CORRIGIR
    const C = 5;
    const i = 2.05;
    const t = 1;
    
    const jurosSimples = jest.fn()
    jurosSimples.mockReturnValue(0.1025)

    const res = juros.pure.jurosMontante({ jurosSimples }); // Mando a função mocada para o jurosMontante
    const resJurosMontante = res(C, i, t)

    expect(resJurosMontante).toBe(5.1025)
})

// Exercício 3 - Teste Montante com juros compostos
test('Montante com juros compostos', () => {
    const C = 5;
    const i = 2.05;
    const t = 1;

    const res = '15.25';
    
    const jurosCompostos = juros.montanteJurosCompostos(C, i, t)
    
    // console.log("C = ",C," i = ",i,"t = ", t)
    expect(jurosCompostos).toBe(res)
})

// Exercício 4 - Teste Juros
test('Juros compostos', () => {
    const C = 5;
    const i = 2.05;
    const t = 1;

    const res = 10.25;
    
    const montanteJurosCompostos = jest.fn()
    montanteJurosCompostos.mockImplementation(() => 15.25)
    
    const jurosCompostos = juros.pure.jurosCompostos({ montanteJurosCompostos }) 
    const jurosCompostosRes = jurosCompostos(C, i, t)
    
    console.log('C=',C,'i=',i,'t=',t)
    expect(montanteJurosCompostos.mock.calls[0]).toEqual([C, i, t]) // Dependencia interna sendo chamada da forma correta
    expect(jurosCompostosRes).toBe(res) // Valor isolado sendo chamado da forma correta

})