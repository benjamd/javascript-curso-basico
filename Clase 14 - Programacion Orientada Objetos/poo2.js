class Empleado {
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return 'Empleado: nombre: ' + this._nombre + ' , sueldo: ' + this._sueldo;
    }

}


class Gerente extends Empleado {
    constructor(nombre, sueldo,departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return 'Gerente: depto: ' + this._departamento + ' ' + super.obtenerDetalles();

    }

}
//sobreescritura
let empleado1 = new Empleado('Juan', 30000);
console.log(empleado1.obtenerDetalles())

let gerente1 = new Gerente('Carlos', 50000, 'Sistemas');
console.log(gerente1.obtenerDetalles())

//polimorfismo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    
    //instanceof: consultar el tipo se debe preguntar desde la menor
    //jerarquia a mayor usando else if
    
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
    else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Object');
    }

}

imprimir(empleado1);

imprimir(gerente1);

