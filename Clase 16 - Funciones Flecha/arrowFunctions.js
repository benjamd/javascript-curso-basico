//no se puede usar hoisting con funciones flecha
//miFuncionFlecha();

let miFuncion = function(){
    console.log("saludos funcion tradicional");
}

//las funciones flecha son anominas (lambda)
//definicion de funcion flecha
const miFuncionFlecha = () => {
    console.log("saludos funcion flecha");
};
//const se usa porque no se va a cambiar la referencia a alguna variable (objeto)
const miFuncionFlecha2= () => {
    console.log("saludos funcion flecha");
};

miFuncionFlecha();


//esta funcion se puede redefinir 
// const saludar = () => {
//     return "saludos desde funcion flecha";
// }
const saludar = () => "saludos desde funcion flecha";


console.log(saludar());

//para no confundir las {} que definen al objeto con el bloque de la funcion
//se ponen parentesis () para encerrar al objeto
const regresarObjeto = () => ({nombre: 'Juan' , apellido: 'Morruca'});

console.log(regresarObjeto())

//definimos una funcion con parametros
const funcionConParametro = (mensaje) => console.log(mensaje);

funcionConParametro("mensaje pasado por parametro");

//si la funcion tiene un solo parametro podemos omitir los parentesis
const funcionConParametroSinParentesis = mensaje => console.log(mensaje);
funcionConParametroSinParentesis("mensaje pasado por parametro sin parentesis");

//funcion con varios parametros, ej. suma
const funcionConVariosPrametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosPrametros(3,5.2));

//si la operaciones son mas complicadas conviene definir un bloque con {}

const funcionBloquePrametros = (op1, op2) => {
    let resultado = 0;
    resultado = op1 + op2;
    return "Suma: " + resultado;
};    
console.log(funcionBloquePrametros(3,5.2));

