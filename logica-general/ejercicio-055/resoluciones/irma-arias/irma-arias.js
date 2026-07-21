
const proyectosDibujo = [
    { id: 1, artista: "Lucía Méndez", resolucionPixeles: "4K", licenciaPro: true, softwareActualizado: true },
    { id: 2, artista: "Marcos Pérez", resolucionPixeles: "8K", licenciaPro: false, softwareActualizado: true }, // Regla de negocio: 8K requiere licencia PRO obligatoria
    { id: 3, artista: "Valeria Ríos", resolucionPixeles: "FullHD", licenciaPro: false, softwareActualizado: false }, // Regla de negocio: Software desactualizado
    { id: 4, artista: "", resolucionPixeles: "4K", licenciaPro: true, softwareActualizado: true } // Inconsistencia: Artista vacío
];

// Función para aplicar las reglas de negocio en la gestión de proyectos de dibujo digital
function aplicarReglasNegocioDibujo(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de proyectos de dibujo digital está vacía o no es válida." };
    }

    let proyectosAprobados = [];
    let proyectosRechazados = [];

    // Paso 2: Ciclo para evaluar cada proyecto bajo las reglas de negocio
    for (let i = 0; i < lista.length; i++) {
        let proyecto = lista[i];
        let violacionesReglas = [];

        // Regla 1: Validar nombre del artista
        if (!proyecto.artista || proyecto.artista.trim() === "") {
            violacionesReglas.push("Nombre de artista vacío o faltante");
        }

        // Regla 2: Regla de negocio para proyectos en alta resolución (8K requiere licencia Pro)
        if (proyecto.resolucionPixeles === "8K" && proyecto.licenciaPro !== true) {
            violacionesReglas.push("Los proyectos en resolución 8K exigen una licencia PRO activa");
        }

        // Regla 3: Regla de negocio operativa (El software debe estar actualizado)
        if (proyecto.softwareActualizado !== true) {
            violacionesReglas.push("El software de dibujo digital se encuentra desactualizado");
        }

        // Paso 3: Clasificar según el cumplimiento de las reglas
        if (violacionesReglas.length === 0) {
            proyectosAprobados.push({
                artista: proyecto.artista,
                estado: "Proyecto Aprobado",
                detalles: proyecto
            });
        } else {
            proyectosRechazados.push({
                artista: proyecto.artista || "Desconocido",
                estado: "Proyecto Rechazado",
                motivos: violacionesReglas
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Evaluación de Reglas Completada",
        totalProyectos: lista.length,
        totalAprobados: proyectosAprobados.length,
        proyectosAprobados: proyectosAprobados,
        proyectosRechazados: proyectosRechazados
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Evaluar los proyectos de dibujo digital bajo las reglas de negocio
console.log("--- PRUEBA NORMAL (Reglas de Negocio - Dibujo Digital) ---");
console.log(JSON.stringify(aplicarReglasNegocioDibujo(proyectosDibujo), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(aplicarReglasNegocioDibujo([]));