
const peliculasMiedo = [
    { id: 1, titulo: "El Conjuro", estado: "pendiente", duracionMinutos: 112 },
    { id: 2, titulo: "Hereditary", estado: "reproduciendo", duracionMinutos: 127 },
    { id: 3, titulo: "El Exorcista", estado: "pausada", duracionMinutos: 122 },
    { id: 4, titulo: "La Monja", estado: "terminada", duracionMinutos: 96 }
];

// Función que simula la transición de estados según reglas de control
function simularEstadosPeliculas(lista) {
    // Validación de caso borde (datos vacíos o no válidos)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estadoSistema: "Error", mensaje: "La lista de estados está vacía." };
    }

    let estadosPermitidos = ["pendiente", "reproduciendo", "pausada", "terminada"];
    let registroSimulacion = [];

    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];

        // Validar integridad del objeto
        if (!item.titulo || !estadosPermitidos.includes(item.estado)) {
            continue; 
        }

        let siguienteAccion = "";

        // Reglas de transición de estados
        switch (item.estado) {
            case "pendiente":
                siguienteAccion = "Iniciar reproducción de la película de terror";
                break;
            case "reproduciendo":
                siguienteAccion = "Monitorear nivel de sustos y permitir pausa";
                break;
            case "pausada":
                siguienteAccion = "Reanudar reproducción o finalizar sesión";
                break;
            case "terminada":
                siguienteAccion = "Archivar en el historial de películas vistas";
                break;
        }

        registroSimulacion.push({
            pelicula: item.titulo,
            estadoActual: item.estado,
            accionSugerida: siguienteAccion
        });
    }

    return {
        estadoSistema: "Simulación Exitosa",
        totalProcesados: registroSimulacion.length,
        transiciones: registroSimulacion
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Simular los estados del catálogo de terror
console.log("--- PRUEBA NORMAL (Simulación de Estados) ---");
console.log(JSON.stringify(simularEstadosPeliculas(peliculasMiedo), null, 2));

// 2. Prueba de caso borde: Enviar un arreglo vacío
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(simularEstadosPeliculas([]));