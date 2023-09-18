let calcularTemperaturaMedia = (temperaturaMaxima, temperaturaMinima) => {
    // Calcula la temperatura media sumando la temperatura máxima y mínima y dividiendo por 2
    let temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
  };
  
  // Ejemplo de uso de la función
  let temperaturaMaxima = 30; // Reemplaza con la temperatura máxima del día
  let temperaturaMinima = 15; // Reemplaza con la temperatura mínima del día
  
  let temperaturaPromedio = calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima);
  console.log(`La temperatura media de la luna es de: ${temperaturaPromedio} Grados Celsius`);
  