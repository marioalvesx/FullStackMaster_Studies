/* Exemplo básico de Promise */

function tempo(ms){
    return new Promise((resolve, reject) => {
        // setTimeout(() => resolve, ms) -> Pode ser simplificado, já que está numa arrow function.
        setTimeout(resolve, ms)
    })
}

tempo(2000)
    .then(() => console.log('opa'));
