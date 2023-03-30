/*
una bandera es un mecanismo de los ciclos. Generalmente es una variable que cambia de estado,
haciendo que este ciclo deje de ejecutarse o que se ejecute
*/

//Un programa que pida al usuario numeros.
//Si alguno de estos numeros es 0, el ciclo deja de ejecutarse.
// de lo contrario el ciclo se ejecuta.
// imaginemos con numero = 6

let numero = parseInt(prompt("Ingres numero"));
// en este caso no es contador ni acumulador
// es una bandera que controla el ciclo 
while (numero != 0) {
    numero = parseInt(prompt("Ingrese numero"));
}
