let a = 5

let valMin = 0, valMax = 10

//Operador AND: &&

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango")
} else {
    console.log("Fuera del rango")
}

a = 20

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango")
} else {
    console.log("Fuera del rango")
}

//Operador OR: ||

let vacaciones = false, diaDeDescanso = false

if(vacaciones || diaDeDescanso) {
    console.log("Padre puede asistir")
} else {
    console.log("Padre está ocupado")
}

diaDeDescanso = true

if(vacaciones || diaDeDescanso) {
    console.log("Padre puede asistir")
} else {
    console.log("Padre está ocupado")
}
