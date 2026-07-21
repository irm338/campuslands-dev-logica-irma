
const matrizRender3D = [
    [85, 90, 78],
    [92, 100, 88],
    [70, 65, 95]
];

// Función para procesar y analizar una matriz simple de animación 3D
function procesarMatrizAnimacion3D(matriz) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(matriz) || matriz.length === 0 || !Array.isArray(matriz[0])) {
        return { estado: "Error", mensaje: "La matriz de renderizado está vacía o no es válida." };
    }

    let totalElementos = 0;
    let sumaValores = 0;
    let valorMaximo = -Infinity;
    let valorMinimo = Infinity;
    let matrizProcesada = [];

    // Paso 2: Ciclos anidados para recorrer filas y columnas de la matriz
    for (let i = 0; i < matriz.length; i++) {
        let filaActual = matriz[i];
        let filaModificada = [];

        for (let j = 0; j < filaActual.length; j++) {
            let valor = filaActual[j];

            // Validar que los elementos sean numéricos
            if (typeof valor !== "number") {
                continue;
            }

            sumaValores += valor;
            totalElementos++;

            if (valor > valorMaximo) {
                valorMaximo = valor;
            }
            if (valor < valorMinimo) {
                valorMinimo = valor;
            }

            // Regla de procesamiento: Aplicar un factor de ajuste del 95% a cada celda de render
            let valorAjustado = Number((valor * 0.95).toFixed(2));
            filaModificada.push(valorAjustado);
        }

        matrizProcesada.push(filaModificada);
    }

    let promedioValores = totalElementos > 0 ? Number((sumaValores / totalElementos).toFixed(2)) : 0;

    // Paso 3: Retornar resultado estructurado
    return {
        estadoSistema: "Procesamiento de Matriz Exitoso",
        dimensiones: `${matriz.length}x${matriz[0].length}`,
        estadisticas: {
            maximoOriginal: valorMaximo,
            minimoOriginal: valorMinimo,
            promedioGeneral: promedioValores
        },
        matrizResultadoAjustada: matrizProcesada
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Procesar la matriz de renderizado 3D
console.log("--- PRUEBA NORMAL (Matriz de Animación 3D) ---");
console.log(JSON.stringify(procesarMatrizAnimacion3D(matrizRender3D), null, 2));

// 2. Prueba de caso borde: Enviar una matriz vacía
console.log("\n--- PRUEBA CASO BORDE (Matriz vacía) ---");
console.log(procesarMatrizAnimacion3D([]));