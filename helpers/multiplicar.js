const colors = require('colors');
const fs = require('fs');
const crearArchivo = async (base, boolean, scope) => {
    try {

        let salida = ''
        for (let i = 1; i <= scope; i++) {
            salida += (`${base} * ${i} = ${base * i}\n`);
        }

        if (boolean) {
            console.log(colors.blue("================="))
            console.log(colors.yellow(`== Tabla del ${base} ==`))
            console.log(colors.red("================="))
            console.log(colors.green(salida))
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return base;
    } catch (error) {
        throw error
    }
}


module.exports = {
    crearArchivo
}