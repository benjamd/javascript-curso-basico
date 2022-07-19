
class Persona {
    static contadorPersonas = 0;
   
    constructor(nombre,apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

   
    get idPersona() {return this._idPersona;}

    get nombre(){return this._nombre;}
    set nombre(nombre) {this._nombre = nombre;}

    get apellido(){return this._apellido;}
    set apellido(apellido){this._apellido = apellido;}

    get edad(){ return this._edad;}
    set edad(edad) {this._edad = edad;}

    nombreCompleto(){ return this.idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this._edad;}

    toString(){ return this.nombreCompleto();}

}


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
    set departamento(departamento){this._departamento = departamento;}    
    
    nombreCompleto(){ return 'idEmpleado: ' + this._idEmpleado + ' ' + this._departamento + ': ' + super.nombreCompleto() + ' sueldo: ' + this._sueldo;}

    toString(){ return this.nombreCompleto()}

   
}


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

    nombreCompleto(){ return 'idCliente: ' + this._idCliente + ' ' + this._fechaRegistro + ' ' + super.nombreCompleto();}

    toString(){ return this.nombreCompleto()}

   
}

let persona1 = new Persona('Juan', 'Perez', 29);
console.log(persona1)
console.log(persona1.toString())
let cliente = new Cliente('Benja', 'Algo', 35, new Date());
console.log(cliente)
console.log(cliente.toString())

let empleado1 = new Empleado('Manuela', 'Roca', 22, 500, 'Ventas');
console.log(empleado1)
console.log(empleado1.toString())