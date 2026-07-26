// irma-arias.js - Ejercicio 082: Ranking de fútbol sala (Validación de datos)

// Función 1: Validar que la estructura general de la lista de equipos no esté vacía
function validarEstructuraLista(equipos) {
    if (!equipos || !Array.isArray(equipos) || equipos.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Validar individualmente los datos y reglas de un equipo de fútbol sala
function validarDatosEquipo(equipo) {
    let errores = [];

    if (!equipo.nombre || typeof equipo.nombre !== 'string' || equipo.nombre.trim() === "") {
        errores.push("El nombre del equipo no es válido o está vacío.");
    }
    if (typeof equipo.partidosJugados !== 'number' || equipo.partidosJugados < 0) {
        errores.push("Los partidos jugados deben ser un número mayor o igual a 0.");
    }
    if (typeof equipo.golesAfavor !== 'number' || equipo.golesAfavor < 0) {
        errores.push("Los goles a favor deben ser un número mayor o igual a 0.");
    }
    if (typeof equipo.puntos !== 'number' || equipo.puntos < 0) {
        errores.push("Los puntos del ranking no pueden ser negativos.");
    }

    return {
        valido: errores.length === 0,
        errores
    };
}

// Función principal que audita y valida el ranking completo de fútbol sala
function procesarValidacionRankingFutsal(listaEquipos) {
    if (!validarEstructuraLista(listaEquipos)) {
        return {
            estadoGeneral: "Rechazado",
            mensaje: "La lista de equipos de fútbol sala está vacía o no tiene un formato válido."
        };
    }

    let equiposValidos = [];
    let equiposConErrores = [];

    for (let i = 0; i < listaEquipos.length; i++) {
        const equipo = listaEquipos[i];
        const resultadoValidacion = validarDatosEquipo(equipo);

        if (resultadoValidacion.valido) {
            equiposValidos.push(equipo);
        } else {
            equiposConErrores.push({
                equipo: equipo.nombre || `Índice ${i}`,
                motivosError: resultadoValidacion.errores
            });
        }
    }

    return {
        accion: "Validación de datos en ranking de fútbol sala",
        totalEvaluados: listaEquipos.length,
        totalValidos: equiposValidos.length,
        totalRechazados: equiposConErrores.length,
        equiposValidos,
        equiposConErrores
    };
}

// --- Casos de prueba ---
const rankingNormal = [
    { nombre: "Deportivo Futsal", partidosJugados: 10, golesAfavor: 25, puntos: 22 },
    { nombre: "Leones Sala FC", partidosJugados: 10, golesAfavor: 18, puntos: 15 },
    { nombre: "Real Futsal Club", partidosJugados: 8, golesAfavor: 14, puntos: 12 }
];

const rankingBorde = [
    { nombre: "", partidosJugados: -2, golesAfavor: 5, puntos: 4 } // Equipo con datos inválidos para caso borde
];

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarValidacionRankingFutsal(rankingNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarValidacionRankingFutsal(rankingBorde), null, 2));