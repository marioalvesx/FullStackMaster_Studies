function tempo(ms){
    return new Promise((resolve, reject) => {
       setTimeout(resolve, ms);
    })
}

const fs = require('fs')

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function(err, lista){
            if(err){
                reject(err);
            }else{
                resolve(lista);
            }
        })    
    })
}

async function ola(){
    const lista = await readdir('../');
    console.log('Terminou');
    console.log(lista);
}

console.log(ola());