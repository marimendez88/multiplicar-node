const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.cyan);
        });
    });

}

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`tabla de ${base}`.cyan);
    console.log('===================='.green);




    // if (!Number(base)) {
    //     return (`El valor introducido ${base} no es un número`);

    // }

    // if (!Number(limite)) {
    //     return (`El valor introducido ${limite} no es un número`);

    // }

    // let data = '';

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${base * i}\n`);
        // data += `${base} * ${i} =  ${base * i}\n`;
    }


}

module.exports = {
    crearArchivo,
    listarTabla
}