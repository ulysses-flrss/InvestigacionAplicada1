alert("La calculadora unicamente puede hacer operaciones con un mismo operador");

let operador = '';
const txtField = document.getElementById('textField');

function mostrarNum(num) {
  txtField.value += num;
}

function operaciones(a, b, ...c) {
  let operacion;

  if (operador === '+') {
    operacion = Number(a) + Number(b);

    c.forEach((n) => {
      operacion += Number(n);
    });
  } else if (operador === '-') {
    operacion = Number(a) - Number(b);

    c.forEach((n) => {
      operacion -= Number(n);
    });
  } else if (operador === 'x') {
    c.forEach((n) => {
      operacion *= Number(n);
    });
  } else if (operador === '÷') {
    operacion = Number(a) / Number(b);

    c.forEach((n) => {
      operacion = Number(n);
    });
  }

  return operacion;
}

function igual() {
  if (txtField.value === '') {
  } else {
    if (operador === '') {
      
    } else {
      const arr = txtField.value.split(operador);
      txtField.value = operaciones(...arr);
    }
  }
}

document.getElementById('numUno').addEventListener('click', () => { mostrarNum(1); });
document.getElementById('numDos').addEventListener('click', () => { mostrarNum(2); });
document.getElementById('numTres').addEventListener('click', () => { mostrarNum(3); });
document.getElementById('numCuatro').addEventListener('click', () => { mostrarNum(4); });
document.getElementById('numCinco').addEventListener('click', () => { mostrarNum(5); });
document.getElementById('numSeis').addEventListener('click', () => { mostrarNum(6); });
document.getElementById('numSiete').addEventListener('click', () => { mostrarNum(7); });
document.getElementById('numOcho').addEventListener('click', () => { mostrarNum(8); });
document.getElementById('numNueve').addEventListener('click', () => { mostrarNum(9); });
document.getElementById('numCero').addEventListener('click', () => { mostrarNum(0); });
document.getElementById('signoSuma').addEventListener('click', () => { mostrarNum('+'); operador = '+'; });
document.getElementById('signoMenos').addEventListener('click', () => { mostrarNum('-'); operador = '-'; });
document.getElementById('signoMultiplicacion').addEventListener('click', () => { mostrarNum('÷'); operador = '÷'; });
document.getElementById('signoDivision').addEventListener('click', () => { mostrarNum('÷'); operador = '÷'; });

document.getElementById('eliminarNum').addEventListener('click', () => { txtField.value = ''; });

const signoIgual = document.getElementById('signoIgual');
signoIgual.addEventListener('click', igual);


