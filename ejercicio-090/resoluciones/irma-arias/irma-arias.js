// irma-arias.js - Ejercicio 090: Viajes y turismo (Lectura de instrucciones)

// Función 1: Validar que el objeto de instrucción de la reserva no esté vacío
function validarInstruccionReserva(reserva) {
    if (!reserva || typeof reserva !== 'object' || Object.keys(reserva).length === 0) {
        return false;
    }
    if (!reserva.destino || typeof reserva.destino !== 'string' || reserva.destino.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Aplicar las reglas de lectura de instrucciones para calcular costos y viabilidad
function calcularCostoYViabilidad(reserva) {
    const { costoBasePorPersona, numeroViajeros, incluyeGuiaVIP, temporadaAlta } = reserva;

    if (numeroViajeros <= 0) {
        return {
            estadoReserva: "Rechazada",
            motivo: "El número de viajeros debe ser mayor a cero."
        };
    }

    let subtotal = costoBasePorPersona * numeroViajeros;

    // Aplicar recargo por guía VIP si se solicita en las instrucciones
    if (incluyeGuiaVIP) {
        subtotal += (150 * numeroViajeros);
    }

    // Aplicar incremento si es temporada alta
    if (temporadaAlta) {
        subtotal *= 1.20; // 20% de incremento por temporada alta
    }

    return {
        estadoReserva: "Aprobada",
        costoTotalCalculado: Number(subtotal.toFixed(2)),
        instruccionProcesada: "Instrucciones de itinerario leídas y aplicadas correctamente."
    };
}

// Función principal que coordina el flujo de lectura y procesamiento de instrucciones turísticas
function procesarInstruccionesViajeTurismo(reserva) {
    if (!validarInstruccionReserva(reserva)) {
        return {
            estado: "Error",
            mensaje: "Las instrucciones de la reserva de viaje están incompletas o vacías."
        };
    }

    const resultadoCalculo = calcularCostoYViabilidad(reserva);

    return {
        accion: "Lectura de instrucciones - Paquete de viaje y turismo",
        destino: reserva.destino,
        viajeros: reserva.numeroViajeros,
        ...resultadoCalculo
    };
}

// --- Casos de prueba ---
const reservaNormal = {
    destino: "Cartagena de Indias, Colombia",
    costoBasePorPersona: 450,
    numeroViajeros: 3,
    incluyeGuiaVIP: true,
    temporadaAlta: false
};

const reservaBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarInstruccionesViajeTurismo(reservaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarInstruccionesViajeTurismo(reservaBorde), null, 2));