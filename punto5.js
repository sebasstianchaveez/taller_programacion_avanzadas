// Definir una función flecha para calcular el salario mensual
let calcularSalario = (ventas, deduccionesPorcentaje) => {
    let salarioBase = 3500000; // Salario base mensual
    let comisionPorVenta = 1500000; // Comisión por cada licencia de software vendida
  
    // Calcular el total devengado incluyendo las comisiones
    let totalDevengado = salarioBase + (ventas * comisionPorVenta);
  
    // Calcular las deducciones por impuestos
    let deducciones = (totalDevengado * deduccionesPorcentaje) / 100;
  
    // Calcular el salario mensual después de las deducciones
    let salarioMensual = totalDevengado - deducciones;
  
    return salarioMensual;
  };
  
  // Ejemplo de uso de la función para calcular el salario de un vendedor
  let ventasDelVendedor = 5; // Cambia este valor según las ventas del vendedor
  let deduccionesPorcentaje = 5; // 5% de deducciones por impuestos
  
  let salarioVendedor = calcularSalario(ventasDelVendedor, deduccionesPorcentaje);
  //imprimame
  console.log(`El sueldo mensual del vendedor es de: ${salarioVendedor}`);
  