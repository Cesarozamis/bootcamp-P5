/* 
Ejercicio 1
Loop de pares
Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un loop de 0 a 100, mostrando en la consola cada número del loop. 
En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/


function loopdepares(){
    for (let i = 0; i <= 100; i++) {
        (i % 2)? console.log(i) : console.log("El numero " + (i) + " es par");
            
        }
        
    }

console.log( loopdepares () );