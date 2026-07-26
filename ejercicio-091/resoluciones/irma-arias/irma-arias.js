// irma-arias.js - Ejercicio 091: Kickboxing (Organización de listas)

// Función 1: Validar que la lista general de peleadores no esté vacía
function validarListaPeleadores(listaPeleadores) {
    if (!listaPeleadores || !Array.isArray(listaPeleadores) || listaPeleadores.length === 0) {
        return false;
    }
    return true;
}

// Función 2: Asignar un puntaje ponderado de nivel según las victorias y derrotas del peleador
function calcularPuntuacionRécord(peleador) {
    const victorias = peleador.victorias || 0;
    const derrotas = peleador.derrotas || 0;
    // Ponderación: 3 puntos por victoria menos 1 punto por derrota
    return (victorias * 3) - (derrotas * 1);
}

// Función 3: Organizar y ordenar la lista de peleadores aplicando criterios múltiples (Apto médico, Puntuación de récord y Peso)
function organizarCarteleraPeleadores(listaPeleadores) {
    // Filtrar primero únicamente a los peleadores que cuentan con apto médico vigente
    const peleadoresAptos = listaPeleadores.filter(p => p.aptoMedico === true);

    // Ordenar de mayor a menor desempeño ponderado
    return [...peleadoresAptos].sort((a, b) => {
        const scoreA = calcularPuntuacionRécord(a);
        const scoreB = calcularPuntuacionRécord(b);

        if (scoreB !== scoreA) {
            return scoreB - scoreA; // Mayor puntuación de récord primero
        }

        // En caso de empate en récord, priorizar al peleador con mayor número de nocauts (KO)
        return (b.nocauts || 0) - (a.nocauts || 0);
    });
}

// Función principal que coordina el proceso integrador de organización de la cartelera
function procesarOrganizacionKickboxing(listaPeleadores) {
    if (!validarListaPeleadores(listaPeleadores)) {
        return {
            estado: "Error",
            mensaje: "La lista de competidores de kickboxing está vacía o no es válida."
        };
    }

    const carteleraOrganizada = organizarCarteleraPeleadores(listaPeleadores);

    return {
        accion: "Organización de listas - Cartelera de Kickboxing",
        totalInscritos: listaPeleadores.length,
        totalAptosParaCompetir: carteleraOrganizada.length,
        carteleraOficial: carteleraOrganizada
    };
}

// --- Casos de prueba ---
const peleadoresNormal = [
    { nombre: "Carlos 'The Lion' Ruiz", categoria: "Peso Ligero", victorias: 10, derrotas: 2, nocauts: 7, aptoMedico: true },
    { nombre: "Sofía 'The Viper' Gómez", categoria: "Peso Ligero", victorias: 12, derrotas: 1, nocauts: 9, aptoMedico: true },
    { nombre: "Marcos 'Iron' Pérez", categoria: "Peso Ligero", victorias: 10, derrotas: 2, nocauts: 5, aptoMedico: true }, // Empate en récord con Carlos, pero menos KO
    { nombre: "Javier 'Shadow' Soto", categoria: "Peso Ligero", victorias: 8, derrotas: 4, nocauts: 4, aptoMedico: false } // No apto médico (debe ser excluido)
];

const peleadoresBorde = []; // Caso borde: Lista vacía

console.log("--- PRUEBA NORMAL ---");
console.log(JSON.stringify(procesarOrganizacionKickboxing(peleadoresNormal), null, 2));

console.log("\n--- CASO BORDE ---");
console.log(JSON.stringify(procesarOrganizacionKickboxing(peleadoresBorde), null, 2));