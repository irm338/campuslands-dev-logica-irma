
/**
 * Lógica Matemática 050 - Redondeo y Precisión
 * Temática: Viajes y Turismo
 * Estudiante: Irma Arias
 */

// 1. Definición de entradas (datos del reto y casos de prueba)
const datosEjemplo = {
    participantes: [12, 18, 25, 30],
    bono: 8,
    penalizacion: 3
};

const casoBorde = {
    participantes: [15.75, 22.33, 40.91],
    bono: 5,
    penalizacion: 2
};

// 2. Función principal para procesar las reglas del reto con redondeo y precisión
function calcularViajesTurismo(entrada) {
    const { participantes, bono, penalizacion } = entrada;

    if (!participantes || participantes.length === 0) {
        return {
            puntaje_final: 0,
            clasificacion: "sin datos",
            explicacion: "La lista de participantes está vacía."
        };
    }

    // 3. Análisis con control de precisión y redondeo decimal
    let sumaPuntajes = 0;

    for (let i = 0; i < participantes.length; i++) {
        sumaPuntajes += participantes[i];
    }

    // Obtener promedio con precisión de 2 decimales usando parseFloat y toFixed
    let promedioBruto = sumaPuntajes / participantes.length;
    let promedioPreciso = parseFloat(promedioBruto.toFixed(2));

    // Aplicar operaciones matemáticas asegurando un redondeo final entero o controlado
    let puntajeFinal = Math.round(promedioPreciso + bono - penalizacion);

    // 4. Reglas de clasificación condicional basadas en la temática de viajes y turismo
    let clasificacion = "";
    if (puntajeFinal > 30) {
        clasificacion = "turismo de lujo";
    } else if (puntajeFinal >= 18) {
        clasificacion = "viaje estandar";
    } else {
        clasificacion = "excursion economica";
    }

    return {
        puntaje_final: puntajeFinal,
        clasificacion: clasificacion,
        explicacion: `Promedio preciso calculado: ${promedioPreciso}, se sumó el bono (${bono}) y se restó la penalización (${penalizacion}) aplicando redondeo exacto.`
    };
}

// 5. Pruebas y resultados en consola
console.log("--- RESULTADO CASO EJEMPLO ---");
console.log(calcularViajesTurismo(datosEjemplo));

console.log("\n--- RESULTADO CASO BORDE ---");
console.log(calcularViajesTurismo(casoBorde));