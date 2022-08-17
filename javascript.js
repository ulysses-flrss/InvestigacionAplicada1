let operador = "";

let numUno = document.getElementById("numUno").addEventListener("click", () => {mostrarNum(1)});
let numDos = document.getElementById("numDos").addEventListener("click", () => {mostrarNum(2)});
let numTres = document.getElementById("numTres").addEventListener("click", () => {mostrarNum(3)});
let numCuatro = document.getElementById("numCuatro").addEventListener("click", () => {mostrarNum(4)});
let numCinco = document.getElementById("numCinco").addEventListener("click", () => {mostrarNum(5)});
let numSeis = document.getElementById("numSeis").addEventListener("click", () => {mostrarNum(6)});
let numSiete = document.getElementById("numSiete").addEventListener("click", () => {mostrarNum(7)});
let numOcho = document.getElementById("numOcho").addEventListener("click", () => {mostrarNum(8)});
let numNueve = document.getElementById("numNueve").addEventListener("click", () => {mostrarNum(9)});
let numCero = document.getElementById("numCero").addEventListener("click", () => {mostrarNum(0)});
let signoSuma = document.getElementById("signoSuma").addEventListener("click", () => {mostrarNum("+"); operador = "+"});
let signoResta = document.getElementById("signoMenos").addEventListener("click", () => {mostrarNum("-"); operador = "-"});
let signoMultiplicacion = document.getElementById("signoMultiplicacion").addEventListener("click", () => {mostrarNum("x"); operador = "x"});
let signoDivision = document.getElementById("signoDivision").addEventListener("click", () => {mostrarNum("÷"); operador = "÷"});
let txtField = document.getElementById("textField", mostrarNum)
let eliminarNum = document.getElementById("eliminarNum").addEventListener("click", () => {txtField.value = ""});


let signoIgual = document.getElementById("signoIgual");
signoIgual.addEventListener("click", igual)

function mostrarNum (num) {
    txtField.value += num;
}

function operaciones (a, b, ...c) { //Sumar

    if (operador === "+") {
        let suma = Number(a) + Number(b);
    
        c.forEach(n => {
            suma += Number(n);
        })
        
        return suma;

    } else if (operador === "-") {
        let resta = Number(a) - Number(b);

        c.forEach(n => {
            resta -= Number(n);
        })
        
        return resta;

    } else if (operador === "x") {
        let multiplicacion = Number(a) * Number(b);

        c.forEach(n => {
            multiplicacion *= Number(n);
        })

        return multiplicacion;

    } else if (operador === "÷") {
        let division = Number(a) / Number(b);

        c.forEach(n => {
        division = Number(n);
    })
    
        return division;
    }
}

function igual () { 
    let arr = txtField.value.split(operador);
    txtField.value = operaciones(...arr);
}