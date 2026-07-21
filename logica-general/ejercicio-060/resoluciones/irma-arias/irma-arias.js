
const menuComidaUrbana = [
    { id: 1, plato: "Hamburguesa Artesanal Doble", tiempoMinutos: 15, calificacionEstrellas: 4.8, frescoDelDia: true },
    { id: 2, plato: "Perro Caliente Gourmet", tiempoMinutos: 25, calificacionEstrellas: 3.5, frescoDelDia: true }, // Rechazado por baja calificación
    { id: 3, plato: "Tacos al Pastor Callejeros", tiempoMinutos: 10, calificacionEstrellas: 4.9, frescoDelDia: true },
    { id: 4, plato: "", tiempoMinutos: 12, calificacionEstrellas: 4.2, frescoDelDia: false } // Inconsistencia: Plato sin nombre y no fresco
];

// Función para aplicar estrategias de selección y filtrar los mejores platos de comida urbana
function aplicarEstrategiaSeleccionComida(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista del menú de comida urbana está vacía o no es válida." };
    }

    let platosSeleccionados = [];
    let platosDescartados = [];

    // Paso 2: Ciclo para evaluar cada plato bajo la estrategia de selección
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let motivosDescarte = [];

        // Regla 1: Validar nombre del plato
        if (!item.plato || item.plato.trim() === "") {
            motivosDescarte.push("Nombre del plato vacío o faltante");
        }

        // Regla 2: Estrategia de tiempo máximo (El plato debe prepararse en 20 minutos o menos)
        if (typeof item.tiempoMinutos !== "number" || item.tiempoMinutos > 20) {
            motivosDescarte.push("Tiempo de preparación excesivo (>20 minutos)");
        }

        // Regla 3: Estrategia de calidad (Calificación mínima de 4.0 estrellas)
        if (typeof item.calificacionEstrellas !== "number" || item.calificacionEstrellas < 4.0) {
            motivosDescarte.push("Calificación de clientes por debajo del estándar (<4.0 estrellas)");
        }

        // Regla 4: Control de frescura estricto (Debe ser preparado con ingredientes del día)
        if (item.frescoDelDia !== true) {
            motivosDescarte.push("El plato no cumple con la norma de frescura del día");
        }

        // Paso 3: Clasificar según la estrategia de selección
        if (motivosDescarte.length === 0) {
            platosSeleccionados.push({
                plato: item.plato,
                estadoSeleccion: "Seleccionado para el menú principal",
                detalles: item
            });
        } else {
            platosDescartados.push({
                plato: item.plato || "Desconocido",
                estadoSeleccion: "Descartado por estrategia",
                motivos: motivosDescarte
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Estrategia de Selección de Comida Urbana Completada",
        totalPlatosEvaluados: lista.length,
        totalSeleccionados: platosSeleccionados.length,
        platosSeleccionados: platosSeleccionados,
        platosDescartados: platosDescartados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar la selección de platos de comida urbana
console.log("--- PRUEBA NORMAL (Estrategias de Selección - Comida Urbana) ---");
console.log(JSON.stringify(aplicarEstrategiaSeleccionComida(menuComidaUrbana), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(aplicarEstrategiaSeleccionComida([]));