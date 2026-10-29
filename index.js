/*6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 */

let num1 = parseInt(prompt("Ingresa un número"));
let num2 = parseInt(prompt("Ingresa otro número"));

if (num1 > num2) {
  document.write("El número " + num1 + " es mayor que " + num2);
} else {
  document.write("El número " + num2 + " es mayor que " + num1);
}
