
// irma-arias.js - Ejercicio 084: Inventario de motos (Filtros por condiciones)

// Función 1: Validar que el inventario general de motocicletas no esté vacío
function validarInventarioMotos(inventario) {
    if (!inventario || !Array.isArray(inventario) || inventario.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Aplicar filtros por condiciones específicas (disponibilidad, cilindrada y precio máximo)
function filtrarMotosPorCondiciones(inventario, cilindradaMax, precioMax) {
    return inventario.filter(moto => 
        moto.enStock === true && 
        moto.cilindrada <= cilindradaMax && 
        moto.precio <= precioMax
    );
}

// Función principal que coordina el proceso de filtrado del inventario
function procesarFiltrosInventarioMotos(inventario, cilindradaMax, precioMax) {
    if (!validarInventarioMotos(inventario)) {
        return {
            estado: "Error",
            mensaje: "El inventario de motocicletas está vacío o no es válido."
        };
    }

    const motosFiltradas = filtrarMotosPorCondiciones(inventario, cilindradaMax, precioMax);

    if (motosFiltradas.length === 0) {
        return {
            estado: "Sin resultados",
            mensaje: "No se encontraron motocicletas que cumplan con los filtros de cilindrada y precio especificados."
        };
    }

    return {
        accion: "Filtrado avanzado de inventario de motos",
        criteriosAplicados: { cilindradaMaxima: cilindradaMax, precioMaximo: precioMax },
        totalMotosCumplen: motosFiltradas.length,
        catalogoFiltrado: motosFiltradas
    };
}

// --- Casos de prueba ---
const inventarioNormal = [
    { modelo: "Yamaha MT-03", cilindrada: 321, precio: 5500, enStock: true },
    { modelo: "Honda CB 190R", cilindrada: 184, precio: 3200, enStock: true },
    { modelo: "Kawasaki Ninja 400", cilindrada: 399, precio: 6800, enStock: false }, // No está en stock
    { modelo: "Suzuki Gixxer 150", cilindrada: 155, precio: 2800, enStock: true }
];

const inventarioBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarFiltrosInventarioMotos(inventarioNormal, 350, 4000), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarFiltrosInventarioMotos(inventarioBorde, 350, 4000), null, 2));