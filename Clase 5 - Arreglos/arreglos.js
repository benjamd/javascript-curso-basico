//constructor deprecado
//let autos = new Array('BMW', 'Mercedes Benz', 'Volvo')

const autos = ['BMW', 'Mercedes Benz', 'Volvo']
console.log(autos)

console.log(autos[0])
console.log(autos[2])
console.log(autos[1])
console.log(autos[4])


for (let i = 0; i < autos.length; i++){
    console.log(i + ": " +autos[i])

}

//modifica valor
autos[1] = 'MercedesBenz'
console.log(autos[1])
//Agrega elementos al final
autos.push('Audi')
autos

console.log(autos.length)

//agrega elementos en indices superiores
//se puede dejar huecos
autos[autos.length] = 'Cadillac'
autos[6] = 'Porche'
autos
console.log(autos[5])

console.log(typeof autos)

console.log(Array.isArray(autos))

console.log(autos instanceof Array)