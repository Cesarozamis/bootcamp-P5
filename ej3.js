/*	Ejercicio 3. Sumatoria
	
Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
-	sumattion(3) debe retornar 6 porque hace (1 +2 +3)
-	sumattion(8) debe retornar 36
*/

const number=8;

    let sum = number; 
    // Completá el código 
    for (let i = 0; i < number; i++){
    sum += i;}
console.log (sum);

