// irma-arias.js - Ejercicio 092: Ping Pong (Comparación de opciones)

// Función 1: Validar que el listado de opciones de raquetas/equipamiento no esté vacío
function validarOpcionesEquipamiento(opciones) {
    if (!opciones || !Array.isArray(opciones) || opciones.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Calcular la puntuación de rendimiento ponderada de cada opción de raqueta
function calcularPuntajeOpcion(opcion) {
    const control = opcion.control || 0; // Escala de 1 a 10
    const velocidad = opcion.velocidad || 0; // Escala de 1 a 10
    const efecto = opcion.efecto || 0; // Escala de 1 a 10
    const precio = opcion.precio || 1; // Precio base para penalizar costos excesivos

    // Puntuación de desempeño ponderada: 40% control, 30% efecto, 30% velocidad, ajustada por precio
    const puntajeBase = (control * 0.4) + (efecto * 0.3) + (velocidad * 0.3);
    const indiceCostoBeneficio = puntajeBase / (precio / 50); // Normalización de precio

    return Number(indiceCostoBeneficio.toFixed(2));
}

// Función 3: Comparar y seleccionar la mejor opción del listado aplicando reglas lógicas
function compararYSeleccionarOptimo(opciones) {
    let mejorOpcion = opciones[0];
    let mayorPuntaje = calcularPuntajeOpcion(mejorOpcion);

    for (let i = 1; i < opciones.length; i++) {
        const puntajeActual = calcularPuntajeOpcion(opciones[i]);
        if (puntajeActual > mayorPuntaje) {
            mayorPuntaje = puntajeActual;
            mejorOpcion = opciones[i];
        }
    }

    return {
        mejorOpcionSeleccionada: mejorOpcion,
        puntajeCostoBeneficio: mayorPuntaje
    };
}

// Función principal que coordina el proceso integrador de comparación de opciones
function procesarComparacionPingPong(opciones) {
    if (!validarOpcionesEquipamiento(opciones)) {
        return {
            estado: "Error",
            mensaje: "El listado de opciones de equipamiento para ping pong está vacío o no es válido."
        };
    }

    const resultadoComparacion = compararYSeleccionarOptimo(opciones);

    return {
        accion: "Comparación de opciones - Equipamiento de Ping Pong",
        totalOpcionesEvaluadas: opciones.length,
        ...resultadoComparacion
    };
}

// --- Casos de prueba ---
const opcionesNormal = [
    { modelo: "Butterfly Pro Line", control: 8, velocidad: 9, efecto: 8.5, precio: 120 },
    { modelo: "Stiga Master Carbon", control: 9, velocidad: 8, efecto: 9, precio: 95 }, // Mejor relación costo-beneficio
    { modelo: "Killerspin JET600", control: 9.5, velocidad: 7.5, efecto: 9, precio: 150 }
];

const opcionesBorde = []; // Caso borde: Listado vacío

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarComparacionPingPong(opcionesNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarComparacionPingPong(opcionesBorde), null, 2));