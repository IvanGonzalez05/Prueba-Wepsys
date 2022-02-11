// Dado un arreglo de enteros sin ordenar, calcule los siguientes
// datos estadísticos:
// 1. El valor mínimo
// 2. El valor máximo
// 3. El promedio (media aritmética)
// 4. La mediana
// 5. La moda
// 6. El rango

// Esta es la funcion principal, la cual toma un array de numeros.
// complejidad en tiempo de O(n) y en espacio de O(1)
const estadisticas = (numeros) => {
  // obteniendo valores maximos y minimos usando la libreria Math
  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);

  // reduce realiza una suma de todos los valores y el resultado final
  // es divido entre la longitud del array
  const promedio = numeros.reduce((acc, curr) => acc + curr) / numeros.length;

  // la Mediana es el valor ubicado en el centro del array. Para obtenerlo
  // calculo la longitud del array entre 2 y redondeo hacia abajo.
  // No estaba seguro de si debia redondear hacia arriba o abajo. He optado
  // por redondear hacia abajo
  const indiceMediana = Math.floor(numeros.length / 2);

  // ejecucion de la funcion obtenerModa la cual retorna el valor
  // mas repetido o un string indicando que no hay moda
  const moda = obtenerModa(numeros);

  // imprimir resultados por pantalla
  console.log(`El valor mínimo del arreglo es ${minimo}`);
  console.log(`El valor máximo del arreglo es ${maximo}`);
  console.log(`El promedio es: ${promedio}`);
  console.log(`La mediana es ${numeros[indiceMediana]}`);
  console.log(`La moda es: ${moda}`);
  console.log(`El rango es de: ${maximo - minimo}`);
};

// funcion que retorna la moda (el valor que mas se repite)
// de no haber una moda, retorna un string indicando este hecho.
// complejidad en el tiempo de O(n) y espacio de O(n)
function obtenerModa(numeros) {
  // declaracion de hash table para mantener un conteo de los numeros
  const hash = {};
  // por cada numero en el array, incremento su cantidad en la hash table
  numeros.forEach((numero) => {
    hash[numero] ? hash[numero]++ : (hash[numero] = 1);
  });

  // obtengo todas las repeticiones almacenadas en la hash table
  const repeticiones = Object.values(hash);
  // obtengo la repeticion mas alta
  const maximaRepeticion = Math.max(...repeticiones);
  // localizo cual numero de la hash table contiene la maxima repeticion
  const moda = numeros.filter((numero) => hash[numero] === maximaRepeticion)[0];

  // si maximaRepeticion es mayor a 1, indica que hubo una moda
  // de lo contrario, retorno un string indicando el caso contrario.
  return maximaRepeticion > 1
    ? moda
    : "No hay moda, debido a que todos los valores se repiten una vez";
}

estadisticas([1, 8, -9, 5, 4, 6, 10]);
