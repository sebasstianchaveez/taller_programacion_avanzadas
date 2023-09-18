// Función de flecha para calcular la distancia entre dos planetas en UA
let calcularDistancia = (x1, y1, x2, y2) => {
  let distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return distancia;
};

// Coordenadas de Naboo (pueden ser diferentes)
let NabooX = 10; // coordenada X de Naboo
let NabooY = 20; // coordenada Y de Naboo

// Coordenadas de otro planeta en la Ruta N-14 (pueden ser diferentes)
let PlanetaX = 30; // coordenada X del otro planeta
let PlanetaY = 40; //  coordenada Y del otro planeta
 

// Calcular la distancia entre Naboo y el otro planeta
let distancia = calcularDistancia(NabooX, NabooY, PlanetaX, PlanetaX);



// Imprimir el resultado
console.log(`La distancia entre Naboo y el otro planeta es de: ${distancia} Unidades Astronomicas UA`);
