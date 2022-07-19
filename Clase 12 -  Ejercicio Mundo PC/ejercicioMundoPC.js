class Dispositivo {

    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){return this._tipoEntrada;}
    set tipoEntrada(tipoEntrada){this._tipoEntrada = tipoEntrada;}

    get marca(){return this._marca;}
    set marca(marca){this._marca = marca;}


}


class Raton extends Dispositivo {
    static contadorRatones = 0;

    constructor(tipoEntrada = 'Raton', marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){return this._idRaton;}


    toString(){
        return 'id: ' + this._idRaton + ' tipoEntrada: ' +
       this._tipoEntrada + ' marca: ' + this._marca;
   }
}

class Teclado extends Dispositivo {

    static contadorTeclados = 0;

    constructor(tipoEntrada = 'Teclado', marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){return this._idTeclado;}

    toString(){
         return 'id: ' + this._idTeclado + ' tipoEntrada: ' +
        this._tipoEntrada + ' marca: ' + this._marca;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca, tamanio){
        this._marca = marca;
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor(){return this._idMonitor;}

    get marca(){return this._marca;}
    set marca(marca){this._marca = marca;}

    get tamanio(){return this._tamanio;}
    set tamanio(tamanio){this._tamanio = tamanio;}

    toString(){
         return 'id: ' + this._idMonitor + ' marca: ' + this._marca
         + ' tamaño: ' + this._tamanio;
    }
}

class Computadora {
    static contadorComputadoras = 0; 
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._teclado = teclado;
        this._monitor = monitor;
        this._raton = raton;
    }
    get idComputadora(){ return this._idComputadora;}

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}

    get nombre(){return this._nombre;}
    set nombre(nombre){this._nombre = nombre;}

    get monitor(){return this._monitor;}
    set monitor(monitor){this._monitor = monitor;}

    get teclado(){return this._teclado;}
    set teclado(teclado){this._teclado = teclado;}

    get raton(){return this._raton;}
    set raton(raton){this._raton = raton;}

    toString(){
        return   'idComputadora: ' + this._idComputadora + ' nombre: ' +
        this._nombre + ' monitor: ' + this._monitor +
        ' teclado: ' +  this._teclado + ' raton: ' + this._raton;
    }


}

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorComputadoras;
        this._computadoras = [];    
    }

    get idOrden(){ return this._idOrden;}

    

    agregarComputadora(computadora){
        this._computadoras.push(computadora);

    }

    toString(){ return 'idOrden: ' + this._idOrden + 
        'computadoras: ' + this._computadoras;   
    }

    mostrarOrden(){
        for(let pc of this._computadoras){
            console.log(pc.toString() + '\n')
        }
        
    }
    

}


let raton1 = new Raton('USB', 'HP');
console.log( raton1.toString() );
let raton2 = new Raton('Bluetooth', 'Dell');
raton2.marca = 'HP';
console.log( raton2.toString() );

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');
console.log( teclado1.toString() );
console.log( teclado2.toString() );

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
console.log( monitor1.toString() );
console.log( monitor2.toString() );

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
console.log( `${computadora1}` );
let computadora2 = new Computadora('Armada', monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();