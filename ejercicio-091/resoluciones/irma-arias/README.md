# Ejercicio 091: Kickboxing - Organización de listas

## ¿Cómo pensé el problema?
Tratándose de un reto integrador controlado de nivel difícil, dividí la solución en etapas lógicas mediante funciones modulares. Una función valida la estructura y existencia de los datos iniciales, otra filtra y calcula puntuaciones basadas en el rendimiento deportivo (victorias, derrotas y nocauts), y finalmente se ordena la cartelera aplicando reglas estrictas de habilitación médica y desempate.

## Reglas aplicadas
1. **Validación inicial:** Asegurar que la lista de competidores contenga registros válidos antes de procesar.
2. **Filtro de seguridad médica:** Excluir de manera automática a cualquier peleador que no disponga de su certificado de apto médico (`aptoMedico: false`).
3. **Criterios de ordenamiento y desempate:** Jerarquizar a los atletas según su puntaje de récord ponderado y, en caso de igualdad, priorizar al peleador con mayor cantidad de nocauts (KO).

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-091/resoluciones/irma-arias/irma-arias.js