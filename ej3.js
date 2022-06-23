/*	Ejercicio 3. Sumatoria
	
Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
-	sumattion(3) debe retornar 6 porque hace (1 +2 +3)
-	sumattion(8) debe retornar 36
*/

let numero=8;


function sumattion() {
    let suma=0;
    for (let index = 0; index <= numero; index++) {
        suma=index+suma;
        
    }
        console.log (suma);
}

return(sumattion(numero));
