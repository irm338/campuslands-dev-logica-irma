
// Arreglo de objetos: Inventario de reactivos y compuestos para fórmulas químicas
const inventarioReactivos = [
    { id: 1, compuesto: "Ácido Sulfúrico (H2SO4)", stockGramos: 500, purezaPorcentaje: 98, requiereRefrigeracion: false },
    { id: 2, compuesto: "Peróxido de Hidrógeno (H2O2)", stockGramos: 150, purezaPorcentaje: 30, requiereRefrigeracion: true }, // Alerta de stock bajo
    { id: 3, compuesto: "Cloruro de Sodio (NaCl)", stockGramos: 1200, purezaPorcentaje: 99, requiereRefrigeracion: false },
    { id: 4, compuesto: "", stockGramos: 300, purezaPorcentaje: 85, requiereRefrigeracion: false } // Inconsistencia: Compuesto sin nombre
];

// Función para gestionar y auditar el inventario lógico de fórmulas químicas
function gestionarInventarioQuimico(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "El inventario de reactivos químicos está vacío o no es válido." };
    }

    let inventarioAprobado = [];
    let inventarioConAlertas = [];
    let stockTotalGramos = 0;

    // Paso 2: Ciclo para evaluar cada reactivo bajo las reglas de inventario lógico
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        let alertasReactivo = [];

        // Regla 1: Validar nombre del compuesto químico
        if (!item.compuesto || item.compuesto.trim() === "") {
            alertasReactivo.push("Nombre del compuesto químico vacío o faltante");
        }

        // Regla 2: Control de stock mínimo (Se requiere un mínimo de 200 gramos para operar)
        if (typeof item.stockGramos !== "number" || item.stockGramos < 200) {
            alertasReactivo.push("Stock crítico: Cantidad inferior al mínimo requerido (200g)");
        }

        // Regla 3: Control de pureza (Debe ser mayor o igual al 90% para uso de alta precisión)
        if (typeof item.purezaPorcentaje === "number" && item.purezaPorcentaje < 90) {
            alertasReactivo.push("Pureza insuficiente para formulación estándar (<90%)");
        }

        // Acumular stock general si el compuesto es válido
        if (typeof item.stockGramos === "number") {
            stockTotalGramos += item.stockGramos;
        }

        // Paso 3: Clasificar el reactivo según su estado en el inventario
        if (alertasReactivo.length === 0) {
            inventarioAprobado.push({
                compuesto: item.compuesto,
                estadoInventario: "Óptimo para formulación",
                detalles: item
            });
        } else {
            inventarioConAlertas.push({
                compuesto: item.compuesto || "Desconocido",
                estadoInventario: "Requiere revisión de inventario",
                observaciones: alertasReactivo
            });
        }
    }

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Auditoría de Inventario Lógico Completada",
        totalItemsEvaluados: lista.length,
        stockAcumuladoGlobalGramos: stockTotalGramos,
        totalOptimos: inventarioAprobado.length,
        reactivosOptimos: inventarioAprobado,
        reactivosConAlertas: inventarioConAlertas
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Auditar el inventario lógico de fórmulas químicas
console.log("--- PRUEBA NORMAL (Inventarios Lógicos - Fórmulas Químicas) ---");
console.log(JSON.stringify(gestionarInventarioQuimico(inventarioReactivos), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(gestionarInventarioQuimico([]));