let letra = prompt("Ingrese la letra que desea");
let cantidad = prompt("Ingrese la cantidad de veces que el eco se repita");

let c;
let i = 1;
let m = "";

while (i <= cantidad) {
    m += letra
    console.log(m);
    i++
}


for (let i = cantidad; i > 1; i--) {
    let letras = "";
    
    for ( c = i; c > 1; c--) {
        
        letras += letra;
        
    }
    console.log(letras);
}
