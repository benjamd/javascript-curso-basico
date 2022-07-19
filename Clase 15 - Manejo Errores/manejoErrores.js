"use strict"

try {
    let x = 10;
    //miFuncion();
} catch (error){
    console.log(error);
} finally {
    console.log("termina la revision de errores");
}  

console.log("continuamos...");

let resultado = 5;
//let resultado = -5;
//let resultado = "hola";
//let resultado = '';

//con la palabra reservada throw se lanza el error que definimos
// no tiene name ni message 

try {
    //x = 10;
    if(isNaN(resultado)) throw 'No es un numero';
    else if(resultado === '') throw 'Es cadena vacia';
    else if (resultado > 0) throw 'Valor Positivo';
    else if (resultado < 0) throw 'Valor Negativo';
} catch (error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("termina revision de errores");
}
