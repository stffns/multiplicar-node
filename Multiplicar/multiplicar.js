const fs = require('fs');
const colors = require('colors');

let listarTabla= (base, limite = 10)=>{

    console.log('====================================='.red)
    console.log(`==========Tabla del ${base} al ${limite}==========`.red)
    console.log('====================================='.red)

        for (let i = 1; i <= limite;i++ ){
            console.log(`${base} * ${i} = ${base * i }`);
        }

}

let crearArchivo = async ( base , limite = 10 )=>{

    return new Promise((res, rej) => {

        if(!Number(base)){
            rej(`El valor introducido ${base} no es un numero`);
            return
        }

    let data = '';

    for (let i = 1; i <= limite;i++ ){
        data += `${base} * ${i} = ${base * i }\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) rej(err);
        res(`tabla-${base}.txt`)

    });
})
}

module.exports = {
    crearArchivo,
    listarTabla
}