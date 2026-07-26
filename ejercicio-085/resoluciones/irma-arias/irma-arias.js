// irma-arias.js - Ejercicio 085: Taller mecánico (Ordenamiento de prioridades)

// Función 1: Validar que la lista de vehículos en espera no esté vacía
function validarColaTaller(colaVehiculos) {
    if (!colaVehiculos || !Array.isArray(colaVehiculos) || colaVehiculos.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Asignar un valor numérico de prioridad según el nivel de urgencia de la avería
function obtenerPesoGravedad(gravedad) {
    switch (gravedad.toLowerCase()) {
        case 'critica': return 3;
        case 'moderada': return 2;
        case 'leve': return 1;
        default: return 0;
    }
}

// Función 3: Ordenar la cola de vehículos aplicando criterios de prioridad (Gravedad > Es urgencia > Orden de llegada)
function ordenarColaReparacion(colaVehiculos) {
    return [...colaVehiculos].sort((a, b) => {
        const pesoA = obtenerPesoGravedad(a.gravedadAveria);
        const pesoB = obtenerPesoGravedad(b.gravedadAveria);

        // 1. Priorizar por gravedad de mayor a menor
        if (pesoB !== pesoA) {
            return pesoB - pesoA;
        }

        // 2. Si hay empate en gravedad, priorizar si es vehículo de emergencia (true/false)
        if (b.esEmergencia !== a.esEmergencia) {
            return b.esEmergencia ? 1 : -1;
        }

        // 3. Si persiste el empate, ordenar por orden de llegada (menor número de ticket primero)
        return a.ordenLlegada - b.ordenLlegada;
    });
}

// Función principal que coordina el ordenamiento de prioridades en el taller mecánico
function procesarPrioridadesTallerMecanico(colaVehiculos) {
    if (!validarColaTaller(colaVehiculos)) {
        return {
            estado: "Error",
            mensaje: "La cola de vehículos en el taller mecánico está vacía o no es válida."
        };
    }

    const colaOrdenada = ordenarColaReparacion(colaVehiculos);

    return {
        accion: "Ordenamiento de prioridades en taller mecánico",
        totalVehiculosEnCola: colaVehiculos.length,
        colaReparacionPriorizada: colaOrdenada
    };
}

// --- Casos de prueba ---
const colaNormal = [
    { placa: "XYZ-123", modelo: "Sedan Familiar", gravedadAveria: "Leve", esEmergencia: false, ordenLlegada: 1 },
    { placa: "ABC-789", modelo: "Camioneta Carga", gravedadAveria: "Critica", esEmergencia: true, ordenLlegada: 2 },
    { placa: "MNO-456", modelo: "Compacto Urbano", gravedadAveria: "Moderada", esEmergencia: false, ordenLlegada: 3 },
    { placa: "DEF-999", modelo: "Ambulancia Taller", gravedadAveria: "Critica", esEmergencia: true, ordenLlegada: 4 }
];

const colaBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarPrioridadesTallerMecanico(colaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarPrioridadesTallerMecanico(colaBorde), null, 2));