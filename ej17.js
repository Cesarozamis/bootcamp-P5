/*	17. Prefijos Telefónicos
	Utils:
	var prefijos = [54, 55, 56, 57, 58]
 var paises = ["argentina", "brasil", "chile", "colombia", "venezuela"]
Debés crear una función llamada `validarPrefijo` que reciba un número por parámetro. Deberá:

1.	Generar un objeto desde dos arreglos dados. Deberá tener como propiedades, los números de prefijos, y como valor, el país correspondiente a cada prefijo.
ejemplo : 

{
	54: “Argentina”,
	55: ”Brasil”,
	56: ”Ecuador”,
	57: ”Bolivia”
}

2.	Validar si los dos primeros números del pasado por parámetro existen en el objeto de prefijos telefónicos. En caso de ser correcto, deberá retornar “Este número pertenece a X”.
3.	En caso de ser incorrecto deberá retornar “El número no pertenece a nuestros países”

Ejemplo: 
-	validarPrefijo(“5412345678”) debe retornar “Este número pertenece a Argentina”
-	validarPrefijo(“5712345678”) debe retornar “Este número pertenece a Bolivia”
-	validarPrefijo(“8012345678”) debe retornar “El número no pertenece a nuestros países”
*/