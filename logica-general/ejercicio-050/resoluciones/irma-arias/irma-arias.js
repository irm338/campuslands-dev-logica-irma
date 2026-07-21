
const itinerariosViaje = [
    { id: 1, destino: "Cartagena", presupuestoUSD: 800, dias: 5, temporadaAlta: true },
    { id: 2, destino: "Medellín", presupuestoUSD: 450, dias: 4, temporadaAlta: false },
    { id: 3, destino: "San Andrés", presupuestoUSD: 1200, dias: 7, temporadaAlta: true },
    { id: 4, destino: "", presupuestoUSD: 300, dias: 3, temporadaAlta: false } // Inconsistencia: Destino vacío
];

// Función para procesar y validar las instrucciones de viaje según el presupuesto
function procesarInstruccionesViaje(lista, presupuestoMaximo) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de itinerarios está vacía o no es válida." };
    }
    
    if (typeof presupuestoMaximo !== "number" || presupuestoMaximo <= 0) {
        return { estado: "Error", mensaje: "El presupuesto máximo de referencia no es válido." };
    }

    let destinosAprobados = [];
    let destinosRechazados = [];

    // Paso 2: Ciclo para leer e interpretar cada instrucción/itinerario
    for (let i = 0; i < lista.length; i++) {
        let viaje = lista[i];

        // Regla de validación de campos obligatorios
        if (!viaje.destino || viaje.destino.trim() === "") {
            destinosRechazados.push({ id: viaje.id, motivo: "Destino no especificado o vacío" });
            continue;
        }

        // Regla de decisión basada en presupuesto y temporada
        let costoEstimado = viaje.temporadaAlta ? viaje.presupuestoUSD * 1.25 : viaje.presupuestoUSD;

        if (costoEstimado <= presupuestoMaximo) {
            destinosAprobados.push({
                destino: viaje.destino,
                costoCalculado: costoEstimado,
                estado: "Aprobado para viaje"
            });
        } else {
            destinosRechazados.push({
                destino: viaje.destino,
                costoCalculado: costoEstimado,
                motivo: "Supera el presupuesto máximo permitido"
            });
        }
    }

    // Paso 3: Retornar resultado estructurado
    return {
        estadoSistema: "Proceso Exitoso",
        presupuestoLimite: presupuestoMaximo,
        totalAprobados: destinosAprobados.length,
        itinerariosAprobados: destinosAprobados,
        itinerariosRechazados: destinosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar itinerarios con un presupuesto límite de 1000 USD
console.log("--- PRUEBA NORMAL (Presupuesto límite: 1000 USD) ---");
console.log(JSON.stringify(procesarInstruccionesViaje(itinerariosViaje, 1000), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(procesarInstruccionesViaje([], 1000));