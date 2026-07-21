
const proyectosArquitectura = [
    { id: 1, proyecto: "Torre Residencial", complejidad: "alta", presupuestoAprobado: true, estudioSuelos: true },
    { id: 2, proyecto: "Centro Comercial", complejidad: "alta", presupuestoAprobado: false, estudioSuelos: true }, // Decisión: Rechazado por presupuesto
    { id: 3, proyecto: "Casa Campestre", complejidad: "baja", presupuestoAprobado: true, estudioSuelos: false },  // Decisión: Rechazado por falta de estudio de suelos
    { id: 4, proyecto: "", complejidad: "baja", presupuestoAprobado: true, estudioSuelos: true }                // Inconsistencia: Nombre vacío
];

// Función que implementa una tabla de decisión lógica para proyectos de arquitectura 3D
function evaluarTablaDecisionArquitectura(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de proyectos de arquitectura está vacía o no es válida." };
    }

    let proyectosAprobados = [];
    let proyectosRechazados = [];

    // Paso 2: Ciclo para aplicar las reglas de la tabla de decisión
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let razonesRechazo = [];

        // Regla 1: Validar nombre del proyecto
        if (!item.proyecto || item.proyecto.trim() === "") {
            razonesRechazo.push("Nombre del proyecto vacío o faltante");
        }

        // Regla 2 (Tabla de Decisión): Si la complejidad es alta, el presupuesto DEBE estar aprobado
        if (item.complejidad === "alta" && item.presupuestoAprobado !== true) {
            razonesRechazo.push("Proyecto de complejidad alta requiere presupuesto aprobado");
        }

        // Regla 3 (Tabla de Decisión): Todo proyecto, sin importar su complejidad, exige estudio de suelos obligatorio
        if (item.estudioSuelos !== true) {
            razonesRechazo.push("Falta el estudio de suelos obligatorio");
        }

        // Paso 3: Clasificar según el resultado de la tabla de decisión
        if (razonesRechazo.length === 0) {
            proyectosAprobados.push({
                proyecto: item.proyecto,
                decision: "Aprobado para construcción 3D",
                detalles: item
            });
        } else {
            proyectosRechazados.push({
                proyecto: item.proyecto || "Desconocido",
                decision: "Rechazado por tabla de decisión",
                motivos: razonesRechazo
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Evaluación por Tabla de Decisión Exitosa",
        totalEvaluados: lista.length,
        totalAprobados: proyectosAprobados.length,
        proyectosAprobados: proyectosAprobados,
        proyectosRechazados: proyectosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar los proyectos de arquitectura 3D
console.log("--- PRUEBA NORMAL (Tabla de Decisión - Arquitectura 3D) ---");
console.log(JSON.stringify(evaluarTablaDecisionArquitectura(proyectosArquitectura), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(evaluarTablaDecisionArquitectura([]));