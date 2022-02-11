// Cree un programa que imprima por consola los números del 1
// al 100, para cada uno, a su derecha, debe imprimir además las
// palabras Fizz y/o Buzz dependiendo si el numero es mútiplo de
// 3 (Fizz), de 5 (Buzz) o de 3 y 5 (Fizz Buzz).
// Si el número no es múltiplo de 3 ni de 5, no se imprime nada adicional al propio

for (let i = 1; i <= 100; i++) {
  // una string con el numero
  let stringToPrint = `${i} `;

  // si el numero actual es multiplo de 3, concateno el string Fizz
  if (i % 3 === 0) stringToPrint = stringToPrint.concat("Fizz ");

  // si el numero actual es multiplo de 5, concateno el string Buzz
  if (i % 5 === 0) stringToPrint = stringToPrint.concat("Buzz");

  // imprimo por pantalla cada string;
  console.log(stringToPrint);
}
