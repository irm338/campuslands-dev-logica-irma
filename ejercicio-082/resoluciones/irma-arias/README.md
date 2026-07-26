
# Ejercicio 082: Ranking de fútbol sala - Validación de datos

## ¿Cómo pensé el problema?
Siguiendo los lineamientos de diseño modular del nivel intermedio aplicado, estructuré la solución separando las responsabilidades en funciones pequeñas. Una función comprueba la existencia y tipo de la lista general, mientras que otra audita de manera estricta los atributos individuales de cada equipo (nombre, partidos jugados, goles y puntos) para filtrar anomalías o datos negativos.

## Reglas aplicadas
1. **Verificación de estructura:** Validar que el arreglo de entrada no se encuentre vacío ni sea nulo.
2. **Auditoría de campos:** Comprobar que los valores numéricos de estadísticas deportivas no posean números negativos y que el nombre del equipo sea válido.
3. **Reporte segregado:** Clasificar los registros entre elementos válidos aptos para el ranking y aquellos que presentan errores de validación con su respectiva justificación.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-082/resoluciones/irma-arias/irma-arias.js