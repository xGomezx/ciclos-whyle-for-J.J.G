let num = prompt("Ingrese el limite hasta donde quiere conocer los numeros impares");

for (let index = 0; index <= num; index++) {
    if (index%2 != 0) {
        console.log(index);
    }
}