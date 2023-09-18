let obtenerNombreDelPiloto = (codigoAcceso) => {
    let partes = codigoAcceso.split(': ');
    return partes.length === 2 ? partes[1] : "Nombre no encontrado";
  };
  
  let codigo1 = "ARQ2555: Sara Bel-Sun";
  let codigo2 = "ARQ2556: Nodin Chavdri";
  let codigo3 = "ARQ2557: Finn";
  
  console.log(obtenerNombreDelPiloto(codigo1)); // Imprimirá "Sara Bel-Sun"
  console.log(obtenerNombreDelPiloto(codigo2)); // Imprimirá "Nodin Chavdri"
  console.log(obtenerNombreDelPiloto(codigo3)); // Imprimirá "Finn"
  