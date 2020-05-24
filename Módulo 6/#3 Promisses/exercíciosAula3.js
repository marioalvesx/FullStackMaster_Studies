// 1) Em linguagens síncronas é comum a função sleep(tempo) assim, pode-se por exemplo escrever algo no console, pausar o script por x tempo e escrever algo mais algo como:
// console.log('Olá!')
// sleep(2000)
// console.log('Depois de 2segs')
// simule o sleep de maneira correta em Javascript (sem travar a thread principal) utilizando promises e uma função async/await

const sleep = time => new Promise((resolve) => {
    setTimeout(resolve, time)
})

const execute = async() => {
    console.log('Olá!')
    await sleep(2000)
    console.log('Depois de 2segs')
}

// A função é executada e o conteúdo abaixo do await só é exposto na tela
// depois de aguardar 2 segundos. 

console.log('Olá 0!')
execute()
console.log('Olá 1!')
console.log('Olá 2!')

// Conteúdo 'ola1' e 'ola2' é exposto normalmente na tela.
// Depois de 2 segundos, o execute é rodado e seu conteúdo apresentado.

/* 2) A função readdir disponível no módulo fs do Node, 
permite ler um diretório, e retornar seu conteúdo como um vetor. 
Crie uma versão em Promise da função.
Dica: a assinatura da função é: fs.readdir(caminho, (err, files) => {}) */

const fs = require('fs')

const readdir0 = caminho => new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
        if(err){
            reject(err)
        }else{
            resolve(arquivos)
        }
    })
})

// Precisa chamar a função para ler o diretório e ENTÃO mostrar o conteúdo na tela
// readdir('./').then(arquivos => console.log(arquivos))

/* 3) A lista de arquivos retornado no exercício anterior, também retorna diretórios. Crie uma função que retorne todos os sub-diretórios em um vetor (deve-se ignorar os arquivos retornados pelo readdir).

Algumas funções do fs e de Promises que te ajudarão:

fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
stats que é retornado no callback possui um isDirectory() e um isFile()
(sou bonzinho né, cantei a pedra aqui ;) )
Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise que retorna para um vetor com o resultado.
Ex:
Promise.all([promise1, promise2]).then( results => {

results[0] // resultado de promise1

results[1] // resultado de promise2

})

este exercício é um pouco mais desafiador; é normal ter um pouco de dificuldade *.pivotModel('App/Models/') *.pivotModel('App/Models/')
*/

const readdir1 = caminho => new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
        if(err){
            reject(err)
        }else{
            resolve(arquivos)
        }
    })
})

const stat = caminho => new Promise ((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
        if(err){
            reject(err)
        }else{
            resolve(stats)
        }
    })
})

const isDirectory = async(caminho) => {
    const stats = await stat(caminho)
    return stats.isDirectory() ? caminho : false
}

const execute1 = async() => {
    const files = await readdir1('./')
    const possibleDirectories = await Promise.all(files.map( f => isDirectory(f)))
    const directories = possibleDirectories.filter(val => val)
    console.log('Apenas diretórios')
    console.log(directories)
}
execute1()

/** Pontos Importantes no exercício:
 *  Agrupamento de Promises
 *  Uso do async await
 *  Manipulação de arquivos 
 *  Manipulação de vetores
 */


// 4) A lista de arquivos retornado no exercício 2, também retorna diretórios. Crie uma função que retorne todos os arquivos em um vetor (deve-se ignorar os diretório retornados pelo readdir).

// Algumas funções do fs e de Promises que te ajudarão:

// fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
// stats que é retornado no callback possui um isDirectory() e um isFile()
// (sou bonzinho né, cantei a pedra aqui ;) )
// Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e retorna uma promise que retorna para um vetor com o resultado.
// Ex:
// Promise.all([promise1, promise2]).then( results => {

// results[0] // resultado de promise1

// results[1] // resultado de promise2

// })

// este exercício é um pouco mais desafiador; é normal ter um pouco de dificuldade

const readdir2 = caminho => new Promise((resolve, reject) => {
    fs.readdir(caminho, (err, arquivos) => {
        if(err){
            reject(err)
        }else{
            resolve(arquivos)
        }
    })
})

const stat1 = caminho => new Promise ((resolve, reject) => {
    fs.stat(caminho, (err, stats) => {
        if(err){
            reject(err)
        }else{
            resolve(stats)
        }
    })
})

const isFile = async(caminho) => {
    const stats1 = await stat1(caminho)
    return stats1.isFile() ? caminho : false
}

const execute2 = async() => {
    const files1 = await readdir2('./')
    const possibleFiles = await Promise.all(files1.map( f => isFile(f)))
    const files0 = possibleFiles.filter(val => val)
    console.log('Apenas arquivos')
    console.log(files0)
}
execute2()