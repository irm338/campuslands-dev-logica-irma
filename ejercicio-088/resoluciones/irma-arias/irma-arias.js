// irma-arias.js - Ejercicio 088: Películas de ciencia ficción (Flujos paso a paso)

// Función 1: Validar que el objeto de entrada de la película posea la estructura correcta
function validarDatosPelicula(pelicula) {
    if (!pelicula || typeof pelicula !== 'object' || Object.keys(pelicula).length === 0) {
        return false;
    }
    if (!pelicula.titulo || typeof pelicula.titulo !== 'string' || pelicula.titulo.trim() === "") {
        return false;
    }
    return true;
}

// Funktion 2: Calcular el puntaje ponderado basado en reglas de crítica y taquilla
function calcularPuntajeCalidad(recaudacionMillones, calificacionCritica) {
    // Puntuación ponderada: 60% la crítica (escala 0-10) y 40% la taquilla normalizada
    const factorTaquilla = Math.min(recaudacionMillones / 500, 10);
    const puntajeFinal = (calificacionCritica * 0.6) + (factorTaquilla * 0.4);
    return Number(puntajeFinal.toFixed(2));
}

// Función 3: Determinar el estatus del flujo de la película según su puntaje calculado
function determinarEstatusEstreno(puntaje) {
    if (puntaje >= 8.5) {
        return "Obra Maestra de la Ciencia Ficción (Destacada en cartelera)";
    } else if (puntaje >= 6.0) {
        return "Éxito Comercial y Recomendada";
    } else {
        return "Clasificación Culto / Perfil Bajo";
    }
}

// Función principal que coordina el flujo paso a paso de procesamiento de la película
function procesarFlujoPeliculaSciFi(pelicula) {
    // Paso A: Validación inicial
    if (!validarDatosPelicula(pelicula)) {
        return {
            estado: "Rechazado",
            mensaje: "Error en el flujo: Los datos de la película de ciencia ficción están incompletos o vacíos."
        };
    }

    // Paso B: Procesamiento y cálculo de métricas
    const puntajeObtenido = calcularPuntajeCalidad(pelicula.recaudacionMillones, pelicula.calificacionCritica);

    // Paso C: Aplicación de reglas para el estatus final
    const estatusAsignado = determinarEstatusEstreno(puntajeObtenido);

    // Paso D: Consolidación y entrega de la salida verificable
    return {
        accion: "Flujo paso a paso - Análisis de película sci-fi",
        titulo: pelicula.titulo,
        director: pelicula.director,
        metricasEvaluadas: {
            recaudacionMillones: pelicula.recaudacionMillones,
            calificacionCritica: pelicula.calificacionCritica,
            puntajeCalculado: puntajeObtenido
        },
        estatusFinal: estatusAsignado,
        ejecucionFlujo: "Exitoso"
    };
}

// --- Casos de prueba ---
const peliculaNormal = {
    titulo: "Dune: Part Two",
    director: "Denis Villeneuve",
    recaudacionMillones: 710,
    calificacionCritica: 9.2
};

const peliculaBorde = {}; // Objeto vacío para comprobar el caso borde del flujo

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarFlujoPeliculaSciFi(peliculaNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarFlujoPeliculaSciFi(peliculaBorde), null, 2));