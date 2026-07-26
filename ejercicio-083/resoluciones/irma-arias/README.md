
# Ejercicio 083: Torneo de esports - Toma de decisiones

## ¿Cómo pensé el problema?
Siguiendo los lineamientos de diseño modular del nivel intermedio aplicado, estructuré la solución separando la validación inicial de los datos y encapsulando las reglas de decisión en una función independiente. Esta función evalúa de forma jerárquica el estado disciplinario (penalizaciones), el puntaje obtenido y el diferencial de rondas para determinar el futuro del equipo en el torneo.

## Reglas aplicadas
1. **Validación de integridad:** Comprobar que la información del equipo participante esté completa y no sea nula.
2. **Evaluación disciplinaria:** Descalificar de manera automática a los equipos que superen las dos penalizaciones reglamentarias.
3. **Cruce de rendimiento (Toma de decisiones):** Clasificar a playoffs, mandar a repechaje o eliminar según los puntos de match y la diferencia de rondas acumuladas.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-083/resoluciones/irma-arias/irma-arias.js