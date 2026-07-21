
# Ejercicio 052 - Comparación de Opciones (Ping Pong)

## 1. ¿Cómo pensé el problema?
Enfoqué el problema estableciendo un criterio matemático ponderado que permite enfrentar y comparar múltiples opciones (en este caso, equipamiento de ping pong) basándose en velocidad, control y costo, aislando al mismo tiempo los datos corruptos.

## 2. Reglas aplicadas
* **Depuración inicial:** Filtrar registros vacíos o con puntajes de velocidad nulos/negativos.
* **Cálculo de puntaje:** Aplicar una fórmula ponderada que valora el equilibrio entre rendimiento técnico y precio.
* **Selección del mejor resultado:** Comparar de forma iterativa los puntajes totales para designar la opción ganadora.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js