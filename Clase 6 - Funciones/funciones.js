console.log(miFuncion(1,5.2))
//declaracion de la funcion
function miFuncion(a, b){
    //console.log("Suma: " + (a + b))
    console.log(arguments.length)
    return a + b
}

console.log(miFuncion(1,5.3));

//self invoking
(function (a , b){
    console.log("Ejecutando la funcion " + (a + b))
})(3,4);
console.log(typeof miFuncion)

//var miFuncionTexto = miFuncion.toString()
//console.log(miFuncionTexto)

//funcion tipo expresion
let sumar = function (a,b) {return a + b};
resultado = sumar(1,2);
console.log(resultado);

//funciones flecha
const sumarFuncionTipoFlecha = (a,b) => a + b;
ret = sumarFuncionTipoFlecha(1,2);
console.log(ret);
console.log(sumarFuncionTipoFlecha(1,2.5));

///parametros y argumentos
//valores por default en los argumentos
function multiplicar(a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a * b 
    //return a * b * arguments[2];
}

console.log(multiplicar())
console.log(multiplicar(3,2))
console.log(multiplicar(3))
console.log(multiplicar(3,2, 7))


let result = sumarTodo(5, 4, 13, 10, 9)
console.log(result)

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma;
}

//Paso por valor
let x = 10;

function cambiarValor(a){
    a = 20;
}
//Paso por valor
cambiarValor(x)  //10
console.log(x)
//se copia el valor 

const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}
//paso por referencia en memoria
cambiarValorObjeto(persona);

console.log(persona)