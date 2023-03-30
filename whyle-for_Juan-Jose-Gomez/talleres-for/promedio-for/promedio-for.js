let a = 0;

for (let index = 0; index <= 9; index++) {
    let numeros = parseFloat(prompt("Ingrese un numero"));

    a += numeros / 10
    
}
console.log(a);