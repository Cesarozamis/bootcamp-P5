/*
Ejercicio 2. 
Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
Ahora, modificá el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
*/
let numero=6;
let palabra="hola";


function loopDeImpares(numero,palabra) {
    for (let index = 0; index <= 100; index++) {
        console.log(index);
        if ((index+numero)%2===1) {
            console.log(palabra);
        }
    }
}

return(loopDeImpares(numero,palabra));