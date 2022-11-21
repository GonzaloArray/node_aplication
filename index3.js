const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');


console.clear()


crearArchivo(argv.b, argv.l, argv.s)
    .then(valor => console.log("Se a creado correctamente la tabla del " + valor))
    .catch(err => console.error(err));