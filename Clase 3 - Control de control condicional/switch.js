let numero  = 31
let numeroTexto = "Valor desconocido"

switch(numero){
    case 1:
        numeroTexto = "Numero Uno"
        break
    case 2:
        numeroTexto = "Numero Dos"
        break
    case 3:
    numeroTexto = "Numero Tres"
        break
    case 4:
    numeroTexto = "Numero Cuatro"
        break
    default:
        numeroTexto = "Caso no encontrado"
        break 
}

console.log(numeroTexto)