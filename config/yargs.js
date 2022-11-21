const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Crea una base de números',
        type: 'number'
    })
    .option('l', {
        alias: 'lista',
        demandOption: true,
        default: false,
        describe: 'Envia un booleano true / false',
        type: 'boolean',
    })
    .option('s', {
        alias: 'scope',
        demandOption: true,
        default: 10,
        describe: 'Cuanto de alcance necesitas en tu tabla? tiene que ser menor a 3000',
        type: 'number',
    })
    .check((argv, options) => {
        if (isNaN(argv.b) || argv.s >= 3000 ) {
            throw "Hubo un error en la ejecución del programa revisar los requisitos de uso"
        }

        return true;
    })
    .argv;

module.exports = argv;