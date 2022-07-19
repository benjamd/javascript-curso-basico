let contador = 0;

while( contador < 3){
    console.log(contador)
    contador++
}

contador = 0
do {
    console.log(contador)
    contador++
} while(contador < 3)


for(let contador = 0 ; contador < 3; contador++){
    console.log(contador)
}

//ejemplo con break (primer numero par)
for(let contador = 0 ; contador < 10; contador++){
    
    if(contador % 2  == 0){
        console.log(contador)
        break
    }

}

//ejemplo continue
for(let contador = 0 ; contador < 10; contador++){
    
    if(contador % 2  !== 0){
        continue
    }
    console.log(contador)
}

//LABELS (ETIQUETAS)
inicio:
for(let contador = 0 ; contador < 10; contador++){
    
    if(contador % 2  !== 0){
        continue inicio
    }
    console.log(contador)
}
inicio:
for(let contador = 0 ; contador < 10; contador++){
    
    if(contador % 2  !== 0){
        break inicio
    }
    console.log(contador)
}

