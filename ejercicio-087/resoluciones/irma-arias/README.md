# Ejercicio 087: Lista de reproducción musical - Detección de inconsistencias

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, estructuré la solución dividiendo las tareas en funciones modulares. Una función valida la existencia de la lista musical completa, y otra se encarga de auditar pista por pista para identificar anomalías técnicas (títulos vacíos, duraciones negativas o reproducciones erróneas).

## Reglas aplicadas
1. **Validación inicial:** Comprobar que el arreglo de la lista de reproducción contenga elementos aptos para analizar.
2. **Auditoría de atributos musicales:** Verificar de manera estricta que la duración en segundos sea positiva y que el título de la pista no esté en blanco.
3. **Reporte de anomalías:** Agrupar y reportar detalladamente aquellas canciones que fallen en las validaciones lógicas para su respectiva corrección.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-087/resoluciones/irma-arias/irma-arias.js