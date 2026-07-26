# Ejercicio 081: Videojuegos competitivos - Clasificación por reglas

## ¿Cómo pensé el problema?
Siguiendo los lineamientos de diseño modular del nivel intermedio aplicado, estructuré la solución dividiendo la lógica en funciones especializadas. Una función se encarga de validar la integridad de los datos de entrada del competidor y otra aplica una serie de reglas condicionales basadas en rangos de habilidad, K/D ratio y partidas ganadas para determinar su categoría en los esports.

## Reglas aplicadas
1. **Validación de integridad:** Comprobar que el objeto del jugador contenga información válida y no esté vacío.
2. **Evaluación de rangos (Clasificación):** Analizar métricas cuantitativas de rendimiento para asignar de forma automatizada un rango competitivo (Bronce, Oro, Diamante o Leyenda).
3. **Respuesta estructurada:** Entregar un informe claro con las estadísticas evaluadas y el nivel alcanzado.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-081/resoluciones/irma-arias/irma-arias.js