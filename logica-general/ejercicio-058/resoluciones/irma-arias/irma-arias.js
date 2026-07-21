
// Arreglo de objetos: Lista de turnos y operarios para trabajos de soldadura
const turnosSoldadura = [
    { turnoId: 1, operario: "Carlos Ruiz", especialidad: "Soldadura TIG", certificadoVigente: true, eppCompleto: true },
    { turnoId: 2, operario: "Elena Gómez", especialidad: "Soldadura MIG", certificadoVigente: false, eppCompleto: true }, // Rechazado: Sin certificación vigente
    { turnoId: 3, operario: "Javier Morales", especialidad: "Arco Eléctrico", certificadoVigente: true, eppCompleto: false }, // Rechazado: Falta EPP completo
    { turnoId: 4, operario: "", especialidad: "Soldadura TIG", certificadoVigente: true, eppCompleto: true } // Inconsistencia: Operario vacío
];

// Función para procesar y asignar turnos de soldadura bajo normas de seguridad
function gestionarTurnosSoldadura(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de turnos de soldadura está vacía o no es válida." };
    }

    let turnosAsignados = [];
    let turnosRechazados = [];

    // Paso 2: Ciclo para evaluar la elegibilidad de cada turno y operario
    for (let i = 0; i < lista.length; i++) {
        let turno = lista[i];
        let motivosInhabilitacion = [];

        // Regla 1: Validar nombre del operario
        if (!turno.operario || turno.operario.trim() === "") {
            motivosInhabilitacion.push("Nombre de operario vacío o faltante");
        }

        // Regla 2: El operario debe contar con certificación vigente de soldadura
        if (turno.certificadoVigente !== true) {
            motivosInhabilitacion.push("El operario no cuenta con certificación vigente");
        }

        // Regla 3: El uso de equipo de protección personal (EPP) completo es obligatorio
        if (turno.eppCompleto !== true) {
            motivosInhabilitacion.push("El operario no cuenta con el equipo de protección personal (EPP) completo");
        }

        // Paso 3: Asignar o rechazar el turno según los filtros de seguridad
        if (motivosInhabilitacion.length === 0) {
            turnosAsignados.push({
                turnoId: turno.turnoId,
                operario: turno.operario,
                especialidad: turno.especialidad,
                estadoTurno: "Asignado y Autorizado"
            });
        } else {
            turnosRechazados.push({
                turnoId: turno.turnoId || "N/A",
                operario: turno.operario || "Desconocido",
                estadoTurno: "Turno Denegado",
                motivos: motivosInhabilitacion
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Gestión de Turnos Completada",
        totalTurnosProcesados: lista.length,
        totalAsignados: turnosAsignados.length,
        turnosAsignados: turnosAsignados,
        turnosRechazados: turnosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar la lista de turnos de soldadura
console.log("--- PRUEBA NORMAL (Sistema de Turnos - Soldadura) ---");
console.log(JSON.stringify(gestionarTurnosSoldadura(turnosSoldadura), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(gestionarTurnosSoldadura([]));