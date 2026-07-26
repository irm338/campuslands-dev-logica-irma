// irma-arias.js - Ejercicio 087: Lista de reproducción musical (Detección de inconsistencias)

// Función 1: Validar que la lista de reproducción general no esté vacía
function validarListaReproduccion(playlist) {
    if (!playlist || !Array.isArray(playlist) || playlist.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Auditar una canción individual para detectar inconsistencias en sus datos
function detectarInconsistenciasCancion(cancion, indice) {
    let anomalias = [];

    if (!cancion.titulo || typeof cancion.titulo !== 'string' || cancion.titulo.trim() === "") {
        anomalias.push("Título de canción vacío o no válido.");
    }
    if (typeof cancion.duracionSegundos !== 'number' || cancion.duracionSegundos <= 0) {
        anomalias.push("Duración en segundos inválida (menor o igual a 0).");
    }
    if (typeof cancion.reproduciones !== 'number' || cancion.reproduciones < 0) {
        anomalias.push("Número de reproducciones negativo.");
    }

    return {
        indice,
        cancion: cancion.titulo || `Índice ${indice}`,
        tieneInconsistencia: anomalias.length > 0,
        anomalias
    };
}

// Función principal que audita y procesa toda la lista musical en busca de errores
function procesarDeteccionInconsistenciasPlaylist(playlist) {
    if (!validarListaReproduccion(playlist)) {
        return {
            estado: "Error",
            mensaje: "La lista de reproducción musical está vacía o no tiene un formato válido."
        };
    }

    let cancionesValidas = [];
    let cancionesConInconsistencias = [];

    for (let i = 0; i < playlist.length; i++) {
        const resultadoAuditoria = detectarInconsistenciasCancion(playlist[i], i);

        if (resultadoAuditoria.tieneInconsistencia) {
            cancionesConInconsistencias.push(resultadoAuditoria);
        } else {
            cancionesValidas.push(playlist[i]);
        }
    }

    return {
        accion: "Detección de inconsistencias en lista de reproducción musical",
        totalAnalizadas: playlist.length,
        totalSinErrores: cancionesValidas.length,
        totalInconsistenciasDetectadas: cancionesConInconsistencias.length,
        cancionesConInconsistencias
    };
}

// --- Casos de prueba ---
const playlistNormal = [
    { titulo: "Blinding Lights", duracionSegundos: 200, reproduciones: 1500 },
    { titulo: "Levitating", duracionSegundos: 203, reproduciones: 1200 },
    { titulo: "", duracionSegundos: -45, reproduciones: 50 } // Canción con múltiples inconsistencias
];

const playlistBorde = []; // Caso borde: Playlist vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarDeteccionInconsistenciasPlaylist(playlistNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarDeteccionInconsistenciasPlaylist(playlistBorde), null, 2));