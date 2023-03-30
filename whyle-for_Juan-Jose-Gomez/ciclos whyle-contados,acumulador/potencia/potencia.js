let num1 = parseInt(prompt("Ingrese el primer numero de la potencia"));
let num2 = parseInt(prompt("Ingrese el numero de la potencia"));

let contador = 1;
let potencia = 1;

while (contador <= num2) {

    potencia = potencia * num1
    
    contador ++
}

console.log("La potencia es de", potencia);