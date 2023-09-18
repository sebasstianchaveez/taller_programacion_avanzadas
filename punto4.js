// Arreglo de sables de luz con energía 
let sablesDeLuz = [10, -7, 15, -20, 8, -14, -25, -30];

// Función de flecha para contar los sables con energía negativa
let contarSablesNegativos = (sables) => {
 let sablesNegativos = sables.filter((energia) => energia < 0);
  return sablesNegativos.length;
};

// Llamamos a la función con el arreglo de sablesDeLuz
let cantidadDeSablesNegativos = contarSablesNegativos(sablesDeLuz);

console.log(`La Cantidad de sables de luz con energía negativa son: ${cantidadDeSablesNegativos}`);
