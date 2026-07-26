// irma-arias.js - Ejercicio 081: Videojuegos competitivos (Clasificación por reglas)

// Función 1: Validar que los datos del jugador no estén vacíos o incompletos
function validarDatosJugador(jugador) {
    if (!jugador || typeof jugador !== 'object' || Object.keys(jugador).length === 0) {
        return false;
    }
    return true;
}

// Función 2: Aplicar reglas de clasificación por rangos competitivos
function clasificarRangoCompetitivo(estadisticas) {
    const { puntosHabilidad, kdRatio, partidasGanadas } = estadisticas;

    if (puntosHabilidad >= 2500 && kdRatio >= 2.0 && partidasGanadas >= 100) {
        return "Leyenda / Maestro";
    } else if (puntosHabilidad >= 1800 && kdRatio >= 1.4) {
        return "Diamante";
    } else if (puntosHabilidad >= 1200 && kdRatio >= 1.0) {
        return "Oro";
    } else {
        return "Bronce / Principiante";
    }
}

// Función principal que coordina el proceso de clasificación
function procesarClasificacionJugador(jugador) {
    if (!validarDatosJugador(jugador)) {
        return {
            estado: "Rechazado",
            mensaje: "Error: No se proporcionaron datos válidos del jugador competitivo."
        };
    }

    const rangoAsignado = clasificarRangoCompetitivo(jugador);

    return {
        jugador: jugador.nombreGamertag,
        puntosHabilidad: jugador.puntosHabilidad,
        kdRatio: jugador.kdRatio,
        partidasGanadas: jugador.partidasGanadas,
        rangoCompetitivo: rangoAsignado,
        estadoClasificacion: "Exitoso"
    };
}

// --- Casos de prueba ---
const jugadorNormal = {
    nombreGamertag: "IrmaProPlayer",
    puntosHabilidad: 2650,
    kdRatio: 2.3,
    partidasGanadas: 120
};

const jugadorBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarClasificacionJugador(jugadorNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarClasificacionJugador(jugadorBorde), null, 2));