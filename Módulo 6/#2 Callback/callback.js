const fs = require('fs')

fs.readdir('./', function(err, lista){
    if(err){
        console.log(err);
    }else{
        console.log(lista);
    }
})

/* NÃO DEVE-SE USAR fs.readdirSync(), pois é uma função síncrona. */