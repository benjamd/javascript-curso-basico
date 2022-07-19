let miNumero = "18x";

let edad = Number(miNumero)
console.log(edad)
//NaN este valor No es un Numero
//Not a Number

if(isNaN(edad)){
    console.log("No es un numero")
} else {
    let resultado = (edad >= 18) ? "Puede votar" : "Muy joven para votar"
    console.log(resultado)

}
