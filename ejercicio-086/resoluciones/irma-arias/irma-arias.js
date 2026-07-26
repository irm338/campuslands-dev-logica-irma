// irma-arias.js - Ejercicio 086: Autos hiperdeportivos (Búsqueda de elementos)

// Función 1: Validar que el catálogo general de hiperdeportivos no esté vacío
function validarCatalogoHiperdeportivos(catalogo) {
    if (!catalogo || !Array.isArray(catalogo) || catalogo.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Buscar un vehículo específico dentro del catálogo usando un criterio de coincidencia
function buscarVehiculoPorNombre(catalogo, terminoBusqueda) {
    const terminoLimpio = terminoBusqueda.trim().toLowerCase();
    
    // Buscar coincidencia exacta o parcial en el modelo o marca
    return catalogo.find(auto => 
        auto.modelo.toLowerCase().includes(terminoLimpio) || 
        auto.marca.toLowerCase().includes(terminoLimpio)
    ) || null;
}

// Función principal que coordina el proceso de búsqueda en el inventario de hiperdeportivos
function procesarBusquedaHiperdeportivo(catalogo, terminoBusqueda) {
    if (!validarCatalogoHiperdeportivos(catalogo)) {
        return {
            estado: "Error",
            mensaje: "El catálogo de autos hiperdeportivos está vacío o no es válido."
        };
    }

    if (!terminoBusqueda || typeof terminoBusqueda !== 'string' || terminoBusqueda.trim() === "") {
        return {
            estado: "Error",
            mensaje: "El término de búsqueda ingresado no es válido."
        };
    }

    const autoEncontrado = buscarVehiculoPorNombre(catalogo, terminoBusqueda);

    if (!autoEncontrado) {
        return {
            estado: "No encontrado",
            mensaje: `No se encontró ningún hiperdeportivo que coincida con el término: "${terminoBusqueda}".`
        };
    }

    return {
        accion: "Búsqueda de elemento en catálogo de hiperdeportivos",
        terminoBuscado: terminoBusqueda,
        estadoBusqueda: "Éxito",
        resultado: autoEncontrado
    };
}

// --- Casos de prueba ---
const catalogoNormal = [
    { marca: "Bugatti", modelo: "Chiron Super Sport", velocidadMaximaKmh: 440, potenciaHp: 1600 },
    { marca: "Koenigsegg", modelo: "Jesko Absolut", velocidadMaximaKmh: 531, potenciaHp: 1600 },
    { marca: "Rimac", modelo: "Nevera", velocidadMaximaKmh: 412, potenciaHp: 1914 }
];

const catalogoBorde = []; // Caso borde: Catálogo vacío

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarBusquedaHiperdeportivo(catalogoNormal, "Jesko"), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarBusquedaHiperdeportivo(catalogoBorde, "Bugatti"), null, 2));