const opcionesPingPong = [
    { id: 1, modelo: "Stiga Pro Carbon", velocidad: 99, control: 80, precioUSD: 70 },
    { id: 2, modelo: "Killerspin JET600", velocidad: 85, control: 95, precioUSD: 100 },
    { id: 3, modelo: "Butterfly Timo Boll", velocidad: 90, control: 90, precioUSD: 85 },
    { id: 4, modelo: "", velocidad: 0, control: 0, precioUSD: 0 } // Inconsistencia: Datos vacíos o inválidos
];

// Función para comparar opciones y elegir la mejor según una regla ponderada
function compararYSeleccionarOpciones(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de opciones está vacía o no es válida." };
    }

    let mejoresOpciones = [];
    let registrosInvalidos = [];
    let opcionRecomendada = null;
    let mayorPuntaje = -1;

    // Paso 2: Ciclo para evaluar, comparar y puntuar cada opción
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];

        // Validar integridad de los datos
        if (!item.modelo || item.modelo.trim() === "" || item.velocidad <= 0) {
            registrosInvalidos.push({ id: item.id || "Desconocido", motivo: "Modelo vacío o métricas inválidas" });
            continue;
        }

        // Regla de comparación: Puntaje basado en balance (Velocidad 50% + Control 50% - (Precio * 0.1))
        let puntajeEvaluacion = (item.velocidad * 0.5) + (item.control * 0.5) - (item.precioUSD * 0.05);

        let opcionProcesada = {
            modelo: item.modelo,
            puntajeFinal: Number(puntajeEvaluacion.toFixed(2)),
            detalles: item
        };

        mejoresOpciones.push(opcionProcesada);

        // Determinar cuál es la opción ganadora en la comparación
        if (puntajeEvaluacion > mayorPuntaje) {
            mayorPuntaje = puntajeEvaluacion;
            opcionRecomendada = opcionProcesada;
        }
    }

    // Paso 3: Retornar resultado estructurado
    return {
        estadoSistema: "Comparación Exitosa",
        totalEvaluados: mejoresOpciones.length,
        opcionGanadora: opcionRecomendada,
        rankingOpciones: mejoresOpciones.sort((a, b) => b.puntajeFinal - a.puntajeFinal),
        inconsistenciasOmitidas: registrosInvalidos
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Comparar las opciones de equipamiento de ping pong
console.log("--- PRUEBA NORMAL (Comparación de Paletas) ---");
console.log(JSON.stringify(compararYSeleccionarOpciones(opcionesPingPong), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(compararYSeleccionarOpciones([]));