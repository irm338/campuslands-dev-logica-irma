
const saltosParacaidismo = [
    { id: 1, paracaidista: "Carlos Pérez", alturaMetros: 3500, vientoKmH: 15, equipoAprobado: true },
    { id: 2, paracaidista: "Ana Gómez", alturaMetros: 4000, vientoKmH: 35, equipoAprobado: true }, // Inconsistencia: Viento peligroso
    { id: 3, paracaidista: "Luis Torres", alturaMetros: 1200, vientoKmH: 10, equipoAprobado: true }, // Inconsistencia: Altura insuficiente
    { id: 4, paracaidista: "", alturaMetros: 3000, vientoKmH: 12, equipoAprobado: false } // Inconsistencia: Datos vacíos o equipo no aprobado
];

// Función para resolver y evaluar cada caso de salto bajo reglas de seguridad
function resolverCasosParacaidismo(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de casos de salto está vacía o no es válida." };
    }

    let saltosAprobados = [];
    let saltosRechazados = [];

    // Paso 2: Ciclo para evaluar cada caso según las reglas de seguridad
    for (let i = 0; i < lista.length; i++) {
        let salto = lista[i];
        let motivosRechazo = [];

        // Regla 1: Validar campos obligatorios (nombre del paracaidista)
        if (!salto.paracaidista || salto.paracaidista.trim() === "") {
            motivosRechazo.push("Nombre de paracaidista vacío o faltante");
        }

        // Regla 2: Validar altura mínima de salto (debe ser al menos 3000 metros)
        if (typeof salto.alturaMetros !== "number" || salto.alturaMetros < 3000) {
            motivosRechazo.push("Altura insuficiente para el salto (Mínimo 3000m)");
        }

        // Regla 3: Validar velocidad máxima del viento (no debe superar los 25 km/h)
        if (typeof salto.vientoKmH !== "number" || salto.vientoKmH > 25) {
            motivosRechazo.push("Velocidad del viento excesiva o peligrosa (>25 km/h)");
        }

        // Regla 4: Validar aprobación obligatoria del equipo
        if (salto.equipoAprobado !== true) {
            motivosRechazo.push("El equipo de paracaidismo no cuenta con aprobación");
        }

        // Paso 3: Clasificar el salto según la presencia o ausencia de fallas
        if (motivosRechazo.length === 0) {
            saltosAprobados.push({
                paracaidista: salto.paracaidista,
                estado: "Aprobado para salto",
                detalles: salto
            });
        } else {
            saltosRechazados.push({
                paracaidista: salto.paracaidista || "Desconocido",
                estado: "Rechazado",
                motivos: motivosRechazo
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Resolución de Casos Exitosa",
        totalEvaluados: lista.length,
        totalAprobados: saltosAprobados.length,
        saltosAprobados: saltosAprobados,
        saltosRechazados: saltosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar los casos de salto registrados
console.log("--- PRUEBA NORMAL (Casos de Paracaidismo) ---");
console.log(JSON.stringify(resolverCasosParacaidismo(saltosParacaidismo), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(resolverCasosParacaidismo([]));