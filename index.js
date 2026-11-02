/*
Dificultad:  🟢
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */

let numDivisible = parseInt(
  prompt("Ingresa un número para ver si es divisible en 2"),
);

if (numDivisible % 2 === 0) {
  document.write("El número " + numDivisible + " si es divisible en 2");
} else {
  document.write("El número " + numDivisible + " no es divisible en 2");
}
