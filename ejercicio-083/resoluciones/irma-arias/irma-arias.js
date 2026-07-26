// irma-arias.js - Ejercicio 083: Torneo de esports (Toma de decisiones)

// Función 1: Validar que los datos del equipo participante no estén vacíos
function validarDatosEquipoEsports(equipo) {
    if (!equipo || typeof equipo !== 'object' || Object.keys(equipo).length === 0) {
        return false;
    }
    return true;
}

// Función 2: Aplicar las reglas lógicas para la toma de decisiones del torneo
function evaluarDecisionClasificacion(estadisticas) {
    const { puntosMatch, diferenciaRondas, penalizaciones } = estadisticas;

    if (penalizaciones > 2) {
        return {
            estadoClasificacion: "Descalificado",
            decisionTomada: "Eliminación directa por acumulación de faltas e infracciones de normativa."
        };
    }

    if (puntosMatch >= 12 && diferenciaRondas > 10) {
        return {
            estadoClasificacion: "Clasificado Directo",
            decisionTomada: "Avanza a la fase de Playoffs en el cuadro superior."
        };
    } else if (puntosMatch >= 8 || (puntosMatch >= 6 && diferenciaRondas >= 0)) {
        return {
            estadoClasificacion: "Fase de Repechaje",
            decisionTomada: "Disputará la llave de repesca para buscar cupo final."
        };
    } else {
        return {
            estadoClasificacion: "Eliminado",
            decisionTomada: "No cumple con los mínimos requeridos para continuar en el torneo."
        };
    }
}

// Función principal que coordina el proceso de toma de decisiones del equipo
function procesarDecisionTorneoEsports(equipo) {
    if (!validarDatosEquipoEsports(equipo)) {
        return {
            estado: "Rechazado",
            mensaje: "Error: No se proporcionaron datos válidos del equipo en el torneo de esports."
        };
    }

    const resultadoDecision = evaluarDecisionClasificacion(equipo);

    return {
        nombreEquipo: equipo.nombreEquipo,
        puntosMatch: equipo.puntosMatch,
        diferenciaRondas: equipo.diferenciaRondas,
        penalizaciones: equipo.penalizaciones,
        ...resultadoDecision
    };
}

// --- Casos de prueba ---
const equipoNormal = {
    nombreEquipo: "CyberTitans Gaming",
    puntosMatch: 15,
    diferenciaRondas: 18,
    penalizaciones: 0
};

const equipoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarDecisionTorneoEsports(equipoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarDecisionTorneoEsports(equipoBorde), null, 2));