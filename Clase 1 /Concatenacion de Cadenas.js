var nombre = 'Juan'

var apellido = 'Perez'

var nombreCompleto  = nombre + ' ' + apellido
console.log(nombreCompleto);

var x = nombre + 219;
console.log(x) 

var x = nombre + 2 + 4
console.log(x)
//Toma prioridad la suma, luego concatena
var x = nombre + (2 + 4)
console.log(x)
//javascript evalua de izquierda a derecha
x = 2 + 4 + nombre
console.log(x)
