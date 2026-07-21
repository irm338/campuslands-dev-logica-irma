
# Ejercicio 056 - Matrices Simples (Animación 3D)

## 1. ¿Cómo pensé el problema?
Desglose el problema analizando que una matriz simple (arreglo bidimensional) requiere el uso de ciclos anidados para recorrer cada celda (fila y columna). El propósito es extraer métricas estadísticas (como valores máximos, mínimos y promedios) y aplicar transformaciones numéricas uniformes a los datos de renderizado en un entorno de animación 3D.

## 2. Reglas aplicadas
* **Validación inicial:** Comprobar que la estructura recibida sea un arreglo bidimensional válido y no esté vacío.
* **Recorrido por celdas:** Utilizar un ciclo externo para las filas y un ciclo interno para las columnas.
* **Transformación y acumulación:** Calcular promedios, identificar extremos y aplicar un factor de ajuste a cada elemento de la matriz.

## 3. ¿Cómo ejecutar o revisar la solución?
Ejecuta el archivo utilizando Node.js desde la terminal:
```bash
node resoluciones/irma-arias/irma-arias.js