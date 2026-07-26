// irma-arias.js - Ejercicio 093: Paracaidismo (Resolución de casos)

// Función 1: Validar que los datos del caso de salto no estén vacíos o incompletos
function validarDatosSalto(datosSalto) {
    if (!datosSalto || typeof datosSalto !== 'object' || Object.keys(datosSalto).length === 0) {
        return false;
    }
    if (!datosSalto.paracaidista || typeof datosSalto.paracaidista !== 'string' || datosSalto.paracaidista.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Evaluar las reglas de seguridad meteorológica y técnica para el salto
function evaluarCondicionesSalto(datosSalto) {
    const { velocidadVientoKmh, altitudSalidaMetros, pesoTotalEquipoKg, tieneCertificacionAvanzada } = datosSalto;

    let restricciones = [];

    // Regla 1: Control de velocidad del viento (Límite seguro de 25 km/h)
    if (velocidadVientoKmh > 25) {
        restricciones.push("Viento excesivo para saltos seguros (mayor a 25 km/h).");
    }

    // Regla 2: Control de altitud mínima y máxima operativa (Entre 3000 y 4500 metros)
    if (altitudSalidaMetros < 3000 || altitudSalidaMetros > 4500) {
        restricciones.push("Altitud fuera del rango operativo permitido (3000m - 4500m).");
    }

    // Regla 3: Control de peso máximo del equipo (Límite de 110 kg)
    if (pesoTotalEquipoKg > 110) {
        restricciones.push("El peso total del equipo excede el límite de seguridad (110 kg).");
    }

    // Si existen restricciones, verificar si requiere certificación avanzada para excepciones
    if (restricciones.length > 0) {
        return {
            estadoSalto: "Cancelado / Suspendido",
            motivos: restricciones
        };
    }

    return {
        estadoSalto: "Aprobado para Salto",
        motivos: ["Todas las condiciones meteorológicas y técnicas cumplen con los protocolos de seguridad."]
    };
}

// Función principal que coordina el caso de estudio de paracaidismo
function procesarResolucionParacaidismo(datosSalto) {
    if (!validarDatosSalto(datosSalto)) {
        return {
            estado: "Error",
            mensaje: "Los datos de entrada para la resolución del caso de paracaidismo están incompletos o vacíos."
        };
    }

    const resultadoEvaluacion = evaluarCondicionesSalto(datosSalto);

    return {
        accion: "Resolución de casos - Protocolo de Paracaidismo",
        paracaidista: datosSalto.paracaidista,
        ...resultadoEvaluacion
    };
}

// --- Casos de prueba ---
const saltoNormal = {
    paracaidista: "Irma Arias",
    velocidadVientoKmh: 18,
    altitudSalidaMetros: 3800,
    pesoTotalEquipoKg: 85,
    tieneCertificacionAvanzada: true
};

const saltoBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarResolucionParacaidismo(saltoNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarResolucionParacaidismo(saltoBorde), null, 2));