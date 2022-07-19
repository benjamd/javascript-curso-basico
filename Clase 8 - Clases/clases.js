//no crea el objeto porque con Clases no se aplica Hoisting
//esto es instanciar objetos previo a la definicion del mismo
//let persona3 = new Persona('Karla', 'De Lanus');

//definicion de clase
class Persona {
    //constructor
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){ return this._nombre;}
    set nombre(nombre) {this._nombre = nombre;}

    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}

    nombreCompleto(){ return this._nombre + ' ' + this._apellido;}

  
}

//instancia de clase objeto
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1)

let persona2 = new Persona('Paula', 'Mendez');
console.log(persona2)

//metodo get y set no necesita parentesis
console.log(persona1.nombre)
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre)

//Herencia

class Empleado  extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
        
    }

    get departamento() { return this._departamento;}
    set departamento(departamento) {this._departamento = departamento;}

    //sobreesctitura (overwrite)
    //nombreCompleto(){ return this._departamento + ': ' +this._nombre + ' ' + this._apellido;}
    //sobreescritura con super llamando al metodo de la clase padre
    nombreCompleto(){ return this._departamento + ': ' + super.nombreCompleto();}

    toString(){ return this.nombreCompleto()}

   
}

let empleado1 = new Empleado('Manuela', 'Roca', 'Ventas');
console.log(empleado1)

//se heredan los metodos nombre y apellido
console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.departamento)
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString())

