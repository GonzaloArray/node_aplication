const salarios = [
    { nombre: 'Pampita', salarios: '20lucas', id: 1 },
    { nombre: 'Sol perez', salarios: '100lucas', id: 2 },
    { nombre: 'Lana', salarios: '140lucas', id: 3 },
];

// Uso de callbaks

const getSalario = (id, callback) => {
    const valor = salarios.find(money => money.id === id)?.salarios;

    if (valor) {
        callback(null, valor)
    } else {
        callback(`El empleado con el id: ${id} no existe`)
    }
}

getSalario(66, (err, salario) => {
    if (err) {
        console.error(err)
    } else {
        console.log("Usuario exitoso")
        console.log(`Su salario es ${salario}`)
    }
})

// Con promesas
const getPromesa = (id) => {
    return new Promise((resolve, reject) => {
        const valor = salarios.find(s => s.id === id);

        if (valor) {
            resolve(valor)
        } else {
            reject("Usuario no encontrado");
        }
    })
}

const id = 2
getPromesa(id)
    .then(empleado => console.log("Usuario encontrado " + empleado.nombre))
    .catch(error => console.error(error))