//Funcion Constructor de objetos tipo persona
function Persona(nombre = 'Juan',apellido = 'Perez',email = 'jperez@mail.com'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona();

console.log(padre.nombre);
console.log(padre.apellido);
console.log(padre.email);
console.log(padre.nombreCompleto());

let madre = new Persona('Ana Maria', 'Giunta', 'ganamar@gmail.com')
console.log(madre.nombre);
console.log(madre.apellido);
console.log(madre.email);
console.log(madre.nombreCompleto());

// formas de crear objetos
let miObjeto = new Object();
let miObjeto2 = {}; //recomendable

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; //recomendable

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean();
let miBoolean2 = true;
let miBoolean3 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFunction1 = new Function();
let miFuncion2 = function(){};
 
//Prototype agrega propiedades a todos los objetos del mismo tipo
Persona.prototype.tel = '44332211';
console.log(padre.tel);
console.log(madre.tel);
padre.tel = '1454890137';
console.log(padre.tel);
console.log(madre.tel);

//definicion objeto persona
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 29,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    //metodo: fuction(){}
    nombreCompleto: function(){
       return this.nombre + ' ' + this.apellido;
    },
    get nombreYApellido(){
        return this.nombre + ' ' + this.apellido;
     }

}

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.email)
console.log(persona.edad)
console.log(persona)

//metodo nombreCompleto
console.log(persona.nombreCompleto())

//creacion objeto persona new Object()
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15'
persona2.tel = '1559203416'

console.log(persona2.nombre)
console.log(persona2.direccion)
console.log(persona2.tel)
console.log(persona2)

//accediendo a las propiedades
console.log(persona.nombre)
//como si fuera un array
console.log(persona['nombre'])

//for in 

for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//agregar propiedad al vuelo
persona.tel = '1345987341';
console.log(persona)

//eliminar propiedad al vuelo
delete persona.tel
console.log(persona)

//imprimir objetos (diferentes maneras):

//concatenando el valor de cad propiedad
console.log(persona.nombre + ', ' + persona.apellido) + ', ...';
//for in
for( nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}
//Object.values() como array
let personaArray = Object.values(persona)
console.log(personaArray)

//JSON.stringify
let personaString = JSON.stringify(persona)
console.log(personaString)

//metodos get
console.log(persona.nombreYApellido)

//idioma 
console.log(persona.lang)
//metodo set: idioma
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);

//Call permite llamer un metodo definido en otro objeto

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    },
    nombreYApellido: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona3 = {
    nombre: 'Carlos',
    apellido: 'Sanchez',
}

//Uso de call para usar
//el metodo persona1.nombreCompleto con los datos de persona3
console.log(persona1.nombreCompleto('sr.' , '112345554'));

console.log( persona1.nombreCompleto.call( persona3, 'sr.','1213451376' ) );

// metodo apply
console.log(persona1.nombreYApellido());

console.log( persona1.nombreYApellido.apply( persona3) );
//hasta acá es igual que el metodo  call,
//pero cuando hay parametros se debe pasar como argumento un arreglo
let arreglo = ['Mr.', '12134598']
console.log( persona1.nombreCompleto.apply( persona3, arreglo) );
console.log( persona1.nombreCompleto.apply( persona3, ['Mr.', '12134598']) );

