// irma-arias.js - Ejercicio 089: Películas de miedo (Simulación de estados)

// Función 1: Validar que los datos de la simulación del personaje no estén vacíos
function validarDatosSimulacion(personaje) {
    if (!personaje || typeof personaje !== 'object' || Object.keys(personaje).length === 0) {
        return false;
    }
    if (!personaje.nombre || typeof personaje.nombre !== 'string' || personaje.nombre.trim() === "") {
        return false;
    }
    return true;
}

// Función 2: Simular la transición de estado basada en el nivel de amenaza y recursos
function calcularTransicionEstado(nivelAmenaza, tieneArmaDefensa, miedoAcumulado) {
    if (miedoAcumulado >= 90) {
        return {
            estadoActual: "Pánico Total",
            accionTomada: "El personaje queda paralizado por el terror; no puede huir ni defenderse."
        };
    }

    if (nivelAmenaza > 7 && !tieneArmaDefensa) {
        return {
            estadoActual: "En Peligro Crítico",
            accionTomada: "El personaje debe huir inmediatamente y buscar refugio seguro."
        };
    } else if (nivelAmenaza > 5 && tieneArmaDefensa) {
        return {
            estadoActual: "Enfrentamiento Defensivo",
            accionTomada: "El personaje utiliza su objeto de defensa para contener al antagonista."
        };
    } else {
        return {
            estadoActual: "Exploración Cautelosa",
            accionTomada: "El personaje avanza con sigilo investigando los cuartos oscuros."
        };
    }
}

// Función principal que coordina la simulación de estados del personaje de terror
function procesarSimulacionEstadosTerror(personaje) {
    if (!validarDatosSimulacion(personaje)) {
        return {
            estado: "Rechazado",
            mensaje: "Error en la simulación: Faltan datos del personaje o el objeto está vacío."
        };
    }

    const resultadoEstado = calcularTransicionEstado(
        personaje.nivelAmenaza, 
        personaje.tieneArmaDefensa, 
        personaje.miedoAcumulado
    );

    return {
        accion: "Simulación de estados en película de terror",
        personaje: personaje.nombre,
        ubicacion: personaje.ubicacion || "Habitación desconocida",
        metricas: {
            nivelAmenaza: personaje.nivelAmenaza,
            miedoAcumulado: personaje.miedoAcumulado,
            tieneArmaDefensa: personaje.tieneArmaDefensa
        },
        ...resultadoEstado
    };
}

// --- Casos de prueba ---
const personajeNormal = {
    nombre: "Laurie Strode",
    ubicacion: "Pasillo del segundo piso",
    nivelAmenaza: 8,
    tieneArmaDefensa: true,
    miedoAcumulado: 65
};

const personajeBorde = {}; // Objeto vacío para comprobar el caso borde

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarSimulacionEstadosTerror(personajeNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarSimulacionEstadosTerror(personajeBorde), null, 2));