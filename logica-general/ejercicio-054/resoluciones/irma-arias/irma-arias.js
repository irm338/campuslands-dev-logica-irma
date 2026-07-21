
const procesosTatuaje = [
    { id: 1, cliente: "Sofía Ruiz", tipoSesion: "Líneas y Contorno", esterilizacionVerificada: true, tintaCaducada: false },
    { id: 2, cliente: "Andrés Castro", tipoSesion: "Sombra y Relleno", esterilizacionVerificada: false, tintaCaducada: false }, // Error: Falta esterilización
    { id: 3, cliente: "Camila Vargas", tipoSesion: "Color completo", esterilizacionVerificada: true, tintaCaducada: true }, // Error: Tinta caducada
    { id: 4, cliente: "", tipoSesion: "Retoque", esterilizacionVerificada: true, tintaCaducada: false } // Error: Cliente vacío
];

// Función para diagnosticar errores y asegurar los protocolos del estudio de tatuajes
function diagnosticarErroresTatuajes(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de procesos de tatuaje está vacía o no es válida." };
    }

    let sesionesAprobadas = [];
    let sesionesConErrores = [];

    // Paso 2: Ciclo para revisar los protocolos de cada sesión
    for (let i = 0; i < lista.length; i++) {
        let sesion = lista[i];
        let erroresDetectados = [];

        // Regla 1: Validar nombre del cliente
        if (!sesion.cliente || sesion.cliente.trim() === "") {
            erroresDetectados.push("Nombre de cliente vacío o faltante");
        }

        // Regla 2: Validar obligatoriamente la esterilización
        if (sesion.esterilizacionVerificada !== true) {
            erroresDetectados.push("Protocolo de esterilización no verificado (Riesgo biológico)");
        }

        // Regla 3: Validar que la tinta no esté caducada
        if (sesion.tintaCaducada === true) {
            erroresDetectados.push("Se detectó el uso de tinta caducada");
        }

        // Paso 3: Clasificar según el diagnóstico
        if (erroresDetectados.length === 0) {
            sesionesAprobadas.push({
                cliente: sesion.cliente,
                diagnostico: "Aprobado sin errores de protocolo",
                detalles: sesion
            });
        } else {
            sesionesConErrores.push({
                cliente: sesion.cliente || "Desconocido",
                diagnostico: "Errores detectados en protocolo",
                fallas: erroresDetectados
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Diagnóstico Finalizado",
        totalProcesados: lista.length,
        totalAprobados: sesionesAprobadas.length,
        sesionesAprobadas: sesionesAprobadas,
        sesionesConErrores: sesionesConErrores
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Diagnosticar los procesos en el estudio de tatuajes
console.log("--- PRUEBA NORMAL (Diagnóstico de Tatuajes) ---");
console.log(JSON.stringify(diagnosticarErroresTatuajes(procesosTatuaje), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(diagnosticarErroresTatuajes([]));