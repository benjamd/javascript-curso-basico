//vamos a llamar el codigo de resolver si fue exitoso o
//llamaremos rechazar si hubo un error 


//let miPromesa = new Promise((resolved, rejected) => {});
let miPromesa = new Promise((resolver, rechazar) => {

    let expresion = true;

    if(expresion)
        resolver('Resolvio correcto');
    else 
        rechazar('Se produjo un error');

});

//miPromesa.then( valor => console.log(valor), error => console.log(error));
/*
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
*/

//setTimeout usando promesas

let promesa = new Promise((resolver) => {
    //console.log("inicio promesa");
    setTimeout(() => resolver('Saludos con promesa y setTimeout'), 3000);
    //console.log("despues del setTimeout de la promesa");
});

//promesa.then(valor => console.log(valor));


//async indica que una funcion va a regresar una promesa

async function miFuncionConPromesa(){
    return "saludos con promesa y async";
}

//el "valor" que retorna la promesa RESUELTA lo estoy mostrando por consola, concatenado con la suma (5+3)
//miFuncionConPromesa().then(valor => console.log(valor + (5 + 3)) );

//await espera el resultado de una promesa
//await solo se puede usar dentro de una funcion declarada con async
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();


//Promesas, await, async y setTimeout

async function funcionCOnPromesaAwaitYTimeout(){
    console.log("inicio de funcion");
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver("promesa con await y timeout"), 4000);
    });
    console.log("fin de funcion pero previo al await");
    console.log(await miPromesa);
    console.log("fin de funcion esperando por await");
};

funcionCOnPromesaAwaitYTimeout();

