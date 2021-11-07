// Pedimos un numero y unicamente mostramos el alert si es mayor a 1000
let numero = prompt('Ingrese un numero');
if (numero > 1000) {
    alert('El numero ingresado es mayor a 1000');
} else {
    console.log('El numero ingresado es menor a 1000')
}
// Pedimos un texto y si es igual a "Hola" mostramos una alerta por consola
let saludo = prompt('Diga Hola');
if (saludo === 'Hola') {
    console.log('Texto escrito correctamente');
} else {
    alert('Texto escrito erroneamente, no olvide de respetar las mayusculas y las minusculas.');
}
// Pedimos un numero, si está entre 10 y 50 mostramos una alerta
let num = prompt('Ingrese un numero entre 10 y 50');
if ((num >= 10) && (num <= 50)) {
    alert('El numero indicado está entre 10 y 50');
} else {
    console.log('El numero  indicado no está entre 10 y 50')
}