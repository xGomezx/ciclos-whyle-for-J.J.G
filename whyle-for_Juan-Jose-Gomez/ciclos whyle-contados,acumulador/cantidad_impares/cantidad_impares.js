let contador = 0;
let impar = 0;

while (contador <= 100) {
    
    let impares = contador%2 != 0;

    if(impares == true){

        impar = impar + 1
        
    }
    
    
    contador = contador + 1;
}
console.log("la cantidad de impares es de: ", impar);