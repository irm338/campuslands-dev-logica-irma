// irma-arias.js - Ejercicio 094: Tatuajes (Diagnóstico de errores)

// Función 1: Validar que el objeto de auditoría de la sesión no esté vacío
function validarDatosSesionTatuaje(sesion) {
    if (!sesion || typeof sesion !== 'object' || Object.keys(sesion).length === 0) {
        return false;
    }
    if (!sesion.cliente || typeof sesion.cliente !== 'string' || sesion.cliente.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Diagnosticar errores y fallas en los protocolos de bioseguridad y preparación
function diagnosticarErroresTatuaje(sesion) {
    const { equipoEsterilizado, tintasHomologadasSanidad, clienteMayorDeEdad, pielConAfeccionesVisibles } = sesion;
    let erroresDetectados = [];

    // Regla 1: El equipo de agujas y boquillas debe estar esterilizado
    if (equipoEsterilizado !== true) {
        erroresDetectados.push("Falla crítica: El equipo de trabajo no cuenta con certificación de esterilización.");
    }

    // Regla 2: Las tintas utilizadas deben estar homologadas por sanidad
    if (tintasHomologadasSanidad !== true) {
        erroresDetectados.push("Falla de normativa: Las tintas seleccionadas no están homologadas por salubridad.");
    }

    // Regla 3: El cliente debe ser mayor de edad
    if (clienteMayorDeEdad !== true) {
        erroresDetectados.push("Falla legal: El cliente es menor de edad y no posee autorización médica o tutelar válida.");
    }

    // Regla 4: La piel no debe presentar afecciones o infecciones activas en la zona
    if (pielConAfeccionesVisibles === true) {
        erroresDetectados.push("Falla clínica: La zona de la piel presenta afecciones visibles que impiden el tatuaje.");
    }

    if (erroresDetectados.length > 0) {
        return {
            estadoDiagnostico: "Reprobado / Sesión Cancelada",
            totalErrores: erroresDetectados.length,
            errores: erroresDetectados
        };
    }

    return {
        estadoDiagnostico: "Aprobado / Protocolo Correcto",
        totalErrores: 0,
        errores: ["No se detectaron inconsistencias ni violaciones a los protocolos de bioseguridad."]
    };
}

// Función principal que coordina el diagnóstico de errores para la sesión de tatuaje
function procesarDiagnosticoTatuajes(sesion) {
    if (!validarDatosSesionTatuaje(sesion)) {
        return {
            estado: "Error",
            mensaje: "Los datos de la sesión de tatuaje están incompletos o vacíos."
        };
    }

    const resultadoDiagnostico = diagnosticarErroresTatuaje(sesion);

    return {
        accion: "Diagnóstico de errores - Estudio de Tatuajes",
        cliente: sesion.cliente,
        estudio: sesion.estudio || "Estudio General",
        ...resultadoDiagnostico
    };
}

// --- Casos de prueba ---
const sesionNormal = {
    cliente: "Alejandro Morales",
    estudio: "Ink Master Studio",
    equipoEsterilizado: true,
    tintasHomologadasSanidad: true,
    clienteMayorDeEdad: true,
    pielConAfeccionesVisibles: false
};

const sesionBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarDiagnosticoTatuajes(sesionNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarDiagnosticoTatuajes(sesionBorde), null, 2));