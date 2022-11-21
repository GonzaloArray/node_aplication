console.log("hla mundo")

let nombre = "Javier Gonzalo"
console.log(nombre)

const saludar = (nombre) =>{
    return "Saludos " + nombre
}

console.log(saludar("Gonzalo"))

// para pensar
console.log("Inicio de programa")//1

setTimeout(() => {
    console.log("Primer timeout")
}, 3000);//6
setTimeout(() => {
    console.log("Primer timeout")
}, 0); //3
setTimeout(() => {
    console.log("Primer timeout")
}, 1000);//5
setTimeout(() => {
    console.log("Primer timeout")
}, 0);//4


console.log("Fin del programa")//2