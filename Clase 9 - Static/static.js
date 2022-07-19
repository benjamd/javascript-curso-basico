//no crea el objeto porque con Clases no se aplica Hoisting
//esto es instanciar objetos previo a la definicion del mismo
//let persona3 = new Persona('Karla', 'De Lanus');

//definicion de clase
class Persona {
    //atributos
    //atributo de clase
    static contadorPersonas = 0;
    //atributo de objeto
    email = 'Valor por default email';

    //constructor
    constructor(nombre,apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    //constante static mediante definicion de un metodo
    static get MAX_OBJ() { return 5;}

    get idPersona() {return this._idPersona;}

    get nombre(){return this._nombre;}
    set nombre(nombre) {this._nombre = nombre;}

    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}

    get edad(){ return this._edad;}
    set edad(edad) {this._edad = edad;}

    nombreCompleto(){ return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;}

    toString(){ return this.nombreCompleto();}

    //static para definir metodos de clase 
    static saludar() {console.log('Saludos desde la clase Persona');}

    static saludar2(persona){console.log(persona.nombre);}
}

//instancia de clase objeto
let persona1 = new Persona('Juan', 'Perez', 29);
console.log(persona1)

let persona2 = new Persona('Paula', 'Mendez', 30);
console.log(persona2)

//metodo get y set no necesita parentesis
console.log(persona1.nombre)
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre)

//Herencia

class Empleado  extends Persona{

    static contadorEmpleado = 0;

    constructor(nombre,apellido, edad, sueldo,departamento){
        super(nombre,apellido, edad);
        this._departamento = departamento;
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
        
    }

    get idEmpleado(){return this._idEmpleado;}

    get sueldo(){ return this._sueldo;}
    set sueldo(sueldo){ this._sueldo = sueldo;}

    get departamento() { return this._departamento;}
    set departamento(departamento) {this._departamento = departamento;}

    //sobreesctitura (overwrite)
    //nombreCompleto(){ return this._departamento + ': ' +this._nombre + ' ' + this._apellido;}
    //sobreescritura con super llamando al metodo de la clase padre
    nombreCompleto(){ return this._departamento + ': ' + super.nombreCompleto() + ' sueldo: ' + this._sueldo;}

    toString(){ return this.nombreCompleto()}

   
}


let empleado1 = new Empleado('Manuela', 'Roca', 22, 500, 'Ventas');
console.log(empleado1)

//se heredan los metodos nombre y apellido
console.log(empleado1.nombre)
console.log(empleado1.apellido)
console.log(empleado1.departamento)
console.log(empleado1.nombreCompleto())

console.log(empleado1.toString())

//No es posible llamar a un metodo (static) de clase desde un objeto
//persona1.saludar() 
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//la variable siendo static no se puede acceder desde del objeto,
//solo es accesible desde la clase 
console.log(persona1.contadorObjetosPersonas)
console.log(Persona.contadorPersonas)
console.log(Empleado.contadorPersonas)

let empleado12 = new Empleado('Sharon', 'Stone', 69, 15000, 'Ventas');
console.log(Persona.contadorPersonas)
console.log(Empleado.contadorPersonas)

let persona13 = new Persona('Pablo', 'Diaz',51);
console.log(Persona.contadorPersonas)
console.log(Empleado.contadorPersonas)


//atributo de objeto (no static)
console.log(persona1.email)
console.log(empleado1.email)
console.log(Persona.email) //undifined porque no existe en la clase, se esta creando ahora
console.log(Empleado.email) //undifined porque no existe en la clase, ni se hereda

//toString para observar que idPersona es unico
console.log(persona1.toString())
console.log(persona2.toString())
console.log(empleado1.toString())
console.log(empleado12.toString())
console.log(persona13.toString())
console.log(Persona.contadorPersonas)


//constante estatica

console.log(Persona.MAX_OBJ)
//No da error Se crea atibuto estatico pero no hay efecto
//no existe metodo set
Persona.MAX_OBJ = 10; 
console.log(Persona.MAX_OBJ)




class Cliente  extends Persona{

    static contadorCliente = 0;

    constructor(nombre,apellido, edad, fechaRegistro){
        super(nombre,apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
        
    }

    get idCliente(){return this._idCliente;}

    
    get fechaRegistro() { return this._fechaRegistro;}
    set fechaRegistro(fechaRegistro) {this._fechaRegistro = fechaRegistro;}

    //sobreesctitura (overwrite)
    //nombreCompleto(){ return this._departamento + ': ' +this._nombre + ' ' + this._apellido;}
    //sobreescritura con super llamando al metodo de la clase padre
    nombreCompleto(){ return this._fechaRegistro + ': ' + super.nombreCompleto();}

    toString(){ return this.nombreCompleto()}

   
}

let cliente = new Cliente('Benja', 'Algo', 35, new Date());