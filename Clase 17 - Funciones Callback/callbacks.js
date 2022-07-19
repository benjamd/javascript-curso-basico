//funciones callback, son funciones que se pasan como parametro a otra funciones

function miFuncion1(){
    console.log("funcion 1");
}


function miFuncion2(){
    console.log("funcion 2");
}

//en javascript se ejecutan las funciones de manera secuencial 
miFuncion1();
miFuncion2();

//Funciones de tipo callback

let imp = function imprimir(mensaje){
    console.log(mensaje);
};

function sumar(op1, op2, functionCallback) {
    let res = op1 + op2;
    functionCallback("Resultado: " + res);
}

sumar(5,3, imp);

//Llamadas asincronas con uso de setTimeout

function miFuncionCallback(){
    console.log("saludos asincrono despues de 3 seg.")
}

//despues de 3 segundos, segundo parametros va en milisegundos
setTimeout(miFuncionCallback, 3000);

setTimeout(() => console.log("saludos asincrono 3  funcion flecha despues de 7 seg.") ,7000);

setTimeout(function(){console.log("saludos asincrono 2 despues de 5 seg.") },5000);

//las funciones se ejecutaron de forma asincrona, no en el orden de las sentencias



//setInterval manda a llamar a la funcion callback cada x tiempo
let rejoj = () => {
    let fecha = new Date();
    console.log(fecha.getHours() +':'+ fecha.getMinutes() +':'+ fecha.getSeconds());
}

setInterval(rejoj,1000); //1 segundo