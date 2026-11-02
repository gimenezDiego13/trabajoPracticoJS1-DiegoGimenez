/*


Dificultad:  🟢
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
 */

let num1 = parseInt(prompt("Ingresa el primer número"));
let num2 = parseInt(prompt("Ingresa el segundo número"));
let num3 = parseInt(prompt("Ingresa el tercer número"));

if (num1 > num2 && num1 > num3) {
  document.write("El número " + num1 + " es mayor que " + num2 + " y " + num3);
} else if (num2 > num1 && num2 > num3) {
  document.write("El número " + num2 + " es mayor que " + num1 + " y " + num3);
} else if (num3 > num1 && num3 > num1) {
  document.write("El número " + num3 + " es mayor que " + num1 + " y " + num2);
} else {
  document.write("Hiciste algo mal, recarga la página");
}
