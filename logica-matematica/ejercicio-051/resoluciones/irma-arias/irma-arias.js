
/**
 * Lógica Matemática 051 - Conteo Combinatorio Simple
 * Temática: Kickboxing
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [5, 10],
    bono: 4,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas con conteo combinatorio
function calcularKickboxingCombinatorio(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Simulación de conteo combinatorio (ej: calcular parejas o combinaciones posibles entre los elementos)
    let sumaBase = 0;
    for (let i = 0; i < participantes.length; i++) {
        sumaBase += participantes[i];
    }

    // Cálculo combinatorio simple (ej. combinaciones de n elementos tomados de 2 en 2: n * (n - 1) / 2)
    let n = participantes.length;
    let combinacionesPosibles = (n >= 2) ? (n * (n - 1)) / 2 : 0;

    let promedioBase = Math.round(sumaBase / n);
    let puntajeFinal = promedioBase + combinacionesPosibles + bono - penalizacion;

    // 4. Reglas de clasificación condicional basadas en kickboxing
    let clasificacion = "";
    if (puntajeFinal > 35) {
        clasificacion: clasificacion = "categoria profesional";
    } else if (puntajeFinal >= 20) {
        clasificacion = "categoria amateur";
    } else {
        clasificacion = "categoria novato";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio base: ${promedioBase}, combinaciones calculadas: ${combinacionesPosibles}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) según las reglas.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularKickboxingCombinatorio(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularKickboxingCombinatorio(casoBorde));