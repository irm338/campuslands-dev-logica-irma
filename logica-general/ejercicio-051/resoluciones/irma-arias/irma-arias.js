
const competidoresKickboxing = [
    { id: 1, nombre: "Carlos 'The Lion'", pesoKg: 75, victorias: 12, ranking: 3 },
    { id: 2, nombre: "Javier 'The Viper'", pesoKg: 70, victorias: 15, ranking: 1 },
    { id: 3, nombre: "Mateo 'Iron Fists'", pesoKg: 75, victorias: 9, ranking: 5 },
    { id: 4, nombre: "", pesoKg: 68, victorias: 4, ranking: 10 } // Inconsistencia: Nombre vacío
];

// Función para organizar y ordenar la lista de competidores
function organizarCompetidores(lista) {
    // Paso 1: Validación de datos de entrada (Caso borde)
    if (!Array.isArray(lista) || lista.length === 0) {
        return { estado: "Error", mensaje: "La lista de competidores está vacía o no es válida." };
    }

    let listaValida = [];
    let registrosInvalidos = [];

    // Paso 2: Filtrar y validar integridad de los datos
    for (let i = 0; i < lista.length; i++) {
        let atleta = lista[i];

        if (!atleta.nombre || atleta.nombre.trim() === "" || typeof atleta.ranking !== "number") {
            registrosInvalidos.push({ id: atleta.id || "Desconocido", motivo: "Nombre vacío o ranking inválido" });
            continue;
        }

        listaValida.push(atleta);
    }

    // Paso 3: Aplicar reglas de ordenamiento (Organizar por ranking de menor a mayor - posición 1 es la más alta)
    listaValida.sort((a, b) => a.ranking - b.ranking);

    // Paso 4: Retornar resultado estructurado
    return {
        estadoSistema: "Organización Exitosa",
        totalValidos: listaValida.length,
        rankingOrganizado: listaValida,
        inconsistenciasOmitidas: registrosInvalidos
    };
}

// --- PRUEBAS ---

// 1. Prueba normal: Organizar el ranking de competidores
console.log("--- PRUEBA NORMAL (Ranking de Kickboxing) ---");
console.log(JSON.stringify(organizarCompetidores(competidoresKickboxing), null, 2));

// 2. Prueba de caso borde: Enviar una lista vacía
console.log("\n--- PRUEBA CASO BORDE (Lista vacía) ---");
console.log(organizarCompetidores([]));